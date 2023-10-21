import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { map } from 'rxjs';
import { FacadeService } from '../../facade.service';

@Component({
  selector: 'sg-province-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './province-overview.smart-component.html',
  styleUrls: ['./province-overview.smart-component.css'],
})
export class ProvinceOverviewSmartComponent {
  private readonly facadeService = inject(FacadeService);

  provinces$ = this.facadeService.getProvinces();

  sortedProvinces$ = this.provinces$.pipe(
    map((provinces) => provinces.sort((a, b) => a.name.localeCompare(b.name)))
  );
}
