import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map } from 'rxjs';

import { FacadeService } from '../../facade.service';

@Component({
  selector: 'sg-fpm-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  templateUrl: './fpm-detail.smart-component.html',
  styleUrls: ['./fpm-detail.smart-component.scss'],
})
export class FpmDetailSmartComponent {
  private readonly facadeService = inject(FacadeService);
  private readonly route = inject(ActivatedRoute);

  votes$ = this.facadeService.getVotesByFlemishParliamentMember().pipe(
    map((votes: any) =>
      votes.map((vote: any) => ({
        ...vote,
        voted: vote.stemming['stemming-voor']
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
          : 'niet gestemd',
      }))
    )
  );

  navigateToParliamentaryInitiativeDetailPage(vote: any) {
    window.open(vote.link, '_blank', 'noreferrer');
  }
}
