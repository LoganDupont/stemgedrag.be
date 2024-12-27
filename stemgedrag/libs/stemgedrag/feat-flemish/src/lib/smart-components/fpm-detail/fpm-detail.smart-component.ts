import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';

import { FacadeService } from '../../facade.service';

@Component({
  selector: 'sg-fpm-detail',
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    MatSidenavModule,
  ],
  templateUrl: './fpm-detail.smart-component.html',
  styleUrls: ['./fpm-detail.smart-component.scss'],
})
export class FpmDetailSmartComponent {
  private readonly facadeService = inject(FacadeService);
  private readonly route = inject(ActivatedRoute);
  private breakpointObserver = inject(BreakpointObserver);

  protected fpmId = input.required<string>({ alias: 'id' });

  protected votes$ = this.facadeService.getVotesByFpMember().pipe(
    map((votes: any) =>
      votes.map((vote: any) => ({
        ...vote,
        voted: vote.stemming
          ? vote.stemming['stemming-voor']
              .map((parliamentMember: any) => parliamentMember.persoon.id)
              .includes(Number(this.route.snapshot.paramMap.get('id')))
            ? 'voor'
            : vote.stemming['stemming-tegen']
                .map((parliamentMember: any) => parliamentMember.persoon.id)
                .includes(Number(this.route.snapshot.paramMap.get('id')))
            ? 'tegen'
            : vote.stemming['stemming-onthouding']
                .map((parliamentMember: any) => parliamentMember.persoon.id)
                .includes(Number(this.route.snapshot.paramMap.get('id')))
            ? 'onthouding'
            : 'niet gestemd'
          : 'onbepaald',
      }))
    )
  );

  private fpmResource = rxResource({
    request: () => ({
      fpmId: this.fpmId(),
    }),
    loader: ({ request }) =>
      this.facadeService.getDetailsFpMember(request.fpmId),
  });

  protected fpMember = computed(() => this.fpmResource.value());
  protected isLoadingFlemishParliamentMember = computed(() =>
    this.fpmResource.isLoading()
  );
  protected present = computed(
    () =>
      this.fpMember()?.['aanwezigheden-huidige-legislatuur']?.['plenaire-aanw']
        ?.aanwezig || 0
  );
  protected apologized = computed(
    () =>
      this.fpMember()?.['aanwezigheden-huidige-legislatuur']?.['plenaire-aanw']
        ?.verontschuldigd || 0
  );
  protected absent = computed(
    () =>
      this.fpMember()?.['aanwezigheden-huidige-legislatuur']?.['plenaire-aanw']
        ?.afwezig || 0
  );
  protected total = computed(
    () => this.present() + this.apologized() + this.absent()
  );
  protected presence = computed(() =>
    this.total() ? this.present() / this.total() : 0
  );

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  navigateToParliamentaryInitiativeDetailPage(vote: any) {
    window.open(vote.link, '_blank', 'noreferrer');
  }
}
