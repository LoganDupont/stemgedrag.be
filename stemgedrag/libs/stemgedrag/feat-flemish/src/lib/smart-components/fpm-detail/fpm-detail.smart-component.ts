import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacadeService } from '../../facade.service';

@Component({
  selector: 'sg-fpm-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fpm-detail.smart-component.html',
  styleUrls: ['./fpm-detail.smart-component.scss'],
})
export class FpmDetailSmartComponent {
  private readonly facadeService = inject(FacadeService);

  votes$ = this.facadeService.getVotesByFlemishParliamentMember();
}
