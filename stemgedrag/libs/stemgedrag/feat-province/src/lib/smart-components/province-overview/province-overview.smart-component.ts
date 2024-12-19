import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { map } from 'rxjs';
import { FacadeService } from '../../facade.service';

@Component({
    selector: 'sg-province-overview',
    imports: [CommonModule, MatListModule],
    templateUrl: './province-overview.smart-component.html',
    styleUrls: ['./province-overview.smart-component.css']
})
export class ProvinceOverviewSmartComponent {
  private readonly facadeService = inject(FacadeService);

  provinces$ = this.facadeService.getProvinces();

  sortedProvinces$ = this.provinces$.pipe(
    map((provinces) => provinces.sort((a, b) => a.name.localeCompare(b.name)))
  );
}
