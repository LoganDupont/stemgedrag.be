import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { rxResource } from '@angular/core/rxjs-interop';
import { FacadeService } from '../../facade.service';

@Component({
  selector: 'sg-vote-record-overview',
  imports: [CommonModule, MatCardModule, MatIconModule, MatProgressBarModule],
  templateUrl: './vote-record-overview.smart-component.html',
  styleUrl: './vote-record-overview.smart-component.scss',
})
export class VoteRecordOverviewSmartComponent {
  private readonly facadeService = inject(FacadeService);

  protected fpmId = input.required<string>({ alias: 'id' });

  private votesByFpMemberResource = rxResource({
    loader: () => this.facadeService.getVotesByFpMember(),
  });

  private votesByFpMember = computed(
    () => this.votesByFpMemberResource.value() || []
  );

  protected votes = computed(() =>
    this.votesByFpMember().map((vote: any) => ({
      ...vote,
      voted: vote.stemming
        ? vote.stemming['stemming-voor']
            .map((parliamentMember: any) => parliamentMember.persoon.id)
            .includes(Number(this.fpmId()))
          ? 'voor'
          : vote.stemming['stemming-tegen']
              .map((parliamentMember: any) => parliamentMember.persoon.id)
              .includes(Number(this.fpmId()))
          ? 'tegen'
          : vote.stemming['stemming-onthouding']
              .map((parliamentMember: any) => parliamentMember.persoon.id)
              .includes(Number(this.fpmId()))
          ? 'onthouding'
          : 'niet gestemd'
        : 'onbepaald',
    }))
  );

  protected isLoadingVotes = computed(() =>
    this.votesByFpMemberResource.isLoading()
  );

  navigateToParliamentaryInitiativeDetailPage(vote: any) {
    window.open(vote.link, '_blank', 'noreferrer');
  }
}
