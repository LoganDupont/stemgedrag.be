import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';

import { FacadeService } from '../../facade.service';

@Component({
  selector: 'sg-fpm-overview',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, NgOptimizedImage],
  templateUrl: './fpm-overview.smart-component.html',
  styleUrls: ['./fpm-overview.smart-component.scss'],
})
export class FpmOverviewSmartComponent {
  private readonly facadeService = inject(FacadeService);

  activeFlemishParliamentMembers$ =
    this.facadeService.getActiveFlemishParliamentMembers();
}
