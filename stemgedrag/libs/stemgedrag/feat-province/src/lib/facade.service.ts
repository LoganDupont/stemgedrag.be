import { inject, Injectable } from '@angular/core';
import { ProvinceService } from '@stemgedrag/stemgedrag/data-access-province';
import { Observable } from 'rxjs';

import { Province } from '@stemgedrag/stemgedrag/type-province';

@Injectable({
  providedIn: 'root',
})
export class FacadeService {
  private readonly provinceService = inject(ProvinceService);

  public getProvinces(): Observable<Province[]> {
    return this.provinceService.getProvinces();
  }
}
