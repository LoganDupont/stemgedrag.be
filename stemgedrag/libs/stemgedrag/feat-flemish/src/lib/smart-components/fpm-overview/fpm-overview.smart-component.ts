import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';

import { FacadeService } from '../../facade.service';

@Component({
  selector: 'sg-fpm-overview',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    NgOptimizedImage,
    MatProgressBarModule,
  ],
  templateUrl: './fpm-overview.smart-component.html',
  styleUrls: ['./fpm-overview.smart-component.scss'],
})
export class FpmOverviewSmartComponent {
  private readonly facadeService = inject(FacadeService);

  activeFlemishParliamentMembers$ =
    this.facadeService.getActiveFlemishParliamentMembers();
}
