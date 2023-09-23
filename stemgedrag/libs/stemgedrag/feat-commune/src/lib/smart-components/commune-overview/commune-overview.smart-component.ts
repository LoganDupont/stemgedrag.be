import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { map } from 'rxjs';
import { FacadeService } from '../../facade.service';

@Component({
  selector: 'sg-commune-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './commune-overview.smart-component.html',
  styleUrls: ['./commune-overview.smart-component.scss'],
})
export class CommuneOverviewSmartComponent {
  private readonly facadeService = inject(FacadeService);

  communes$ = this.facadeService.getCommunes();

  sortedCommunes$ = this.communes$.pipe(
    map((communes) => communes.sort((a, b) => a.name.localeCompare(b.name)))
  );
}
