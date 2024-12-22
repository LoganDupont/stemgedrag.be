import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';

import { FacadeService } from '../../facade.service';

@Component({
    selector: 'sg-mep-overview',
    imports: [CommonModule, RouterModule, MatProgressBarModule],
    templateUrl: './mep-overview.smart-component.html',
    styleUrls: ['./mep-overview.smart-component.scss']
})
export class MepOverviewSmartComponent {
  private readonly facadeService = inject(FacadeService);

  belgianMEPs$ = this.facadeService.getActiveBelgianMEPs();
}
