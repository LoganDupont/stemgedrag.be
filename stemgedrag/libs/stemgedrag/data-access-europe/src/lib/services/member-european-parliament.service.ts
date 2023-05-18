import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { Mep } from '@stemgedrag/stemgedrag/type-mep';

@Injectable({ providedIn: 'root' })
export class MemberEuropeanParlementService {
  private readonly httpClient = inject(HttpClient);
  private apiUrl = '/api/v1';

  public getActiveBelgianMEPs(): Observable<Mep[]> {
    return this.httpClient
      .get<any>(
        `${this.apiUrl}/meps/show-current?country-of-representation=BE&format=application%2Fld%2Bjson&offset=0`
      )
      .pipe(map((data) => data.meps));
  }
}
