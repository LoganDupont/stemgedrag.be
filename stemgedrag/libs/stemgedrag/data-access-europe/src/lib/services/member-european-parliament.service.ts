import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Mep } from '@stemgedrag/stemgedrag/type-mep';

@Injectable({ providedIn: 'root' })
export class MemberEuropeanParlementService {
  private readonly httpClient = inject(HttpClient);
  private apiUrl = 'https://data.europarl.europa.eu/api/v1';

  public getActiveBelgianMEPs(): Observable<Mep[]> {
    return this.httpClient
      .get<any>(
        `${this.apiUrl}/meps/show-current?country-of-representation=BE&format=application%2Fld%2Bjson&offset=0`
      )
      .pipe(map((data) => data.meps));
  }
}
