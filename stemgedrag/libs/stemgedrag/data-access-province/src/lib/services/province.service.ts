import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Province } from '@stemgedrag/stemgedrag/type-province';

@Injectable({ providedIn: 'root' })
export class ProvinceService {
  private readonly httpClient = inject(HttpClient);

  public getProvinces(): Observable<Province[]> {
    return this.httpClient.get<Province[]>(`assets/json/provinces.json`);
  }
}
