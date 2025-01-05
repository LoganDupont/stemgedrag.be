import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { FacadeService } from '../../facade.service';
import { CommissionPresenceUiComponent } from '../../ui-components/commission-presence/commission-presence.ui-component';

@Component({
  selector: 'sg-commissions-overview',
  imports: [CommonModule, MatProgressBarModule, CommissionPresenceUiComponent],
  templateUrl: './commissions-overview.smart-component.html',
  styleUrl: './commissions-overview.smart-component.scss',
})
export class CommissionsOverviewSmartComponent {
  private readonly facadeService = inject(FacadeService);

  protected fpmId = input.required<string>({ alias: 'id' });

  private fpmResource = rxResource({
    request: () => ({
      fpmId: this.fpmId(),
    }),
    loader: ({ request }) => {
      return this.facadeService.getFpmDetails(request.fpmId);
    },
  });

  protected commissionsPresence = computed(
    () =>
      this.fpmResource.value()?.['aanwezigheden-huidige-legislatuur'][
        'commissie-aanw'
      ] || []
  );

  protected isLoadingCommissionsPresence = computed(() =>
    this.fpmResource.isLoading()
  );

  // private present = computed(
  //   () => this.commissions().reduce((acc, curr) => acc + curr., 0)
  //   )

  // private total = computed(
  //   () => this.present() + this.apologized() + this.absent()
  // );
  // protected presence = computed(() =>
  //   this.total() ? this.present() / this.total() : 0
  // );
}
