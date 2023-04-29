import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacadeService } from '../facade.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'sg-stemgedrag-feat-europe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stemgedrag-feat-europe.component.html',
  styleUrls: ['./stemgedrag-feat-europe.component.scss'],
})
export class StemgedragFeatEuropeComponent {
  private readonly facadeService = inject(FacadeService);

  belgianMEPs$ = this.facadeService.getActiveBelgianMEPs();
}
