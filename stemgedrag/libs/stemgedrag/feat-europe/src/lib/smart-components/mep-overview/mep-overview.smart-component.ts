import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacadeService } from '../../facade.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sg-mep-overview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mep-overview.smart-component.html',
  styleUrls: ['./mep-overview.smart-component.scss'],
})
export class MepOverviewSmartComponent {
  private readonly facadeService = inject(FacadeService);

  belgianMEPs$ = this.facadeService.getActiveBelgianMEPs();
}
