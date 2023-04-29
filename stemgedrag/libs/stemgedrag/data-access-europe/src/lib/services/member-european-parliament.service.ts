import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MemberEuropeanParlementService {
  private readonly httpClient = inject(HttpClient);
  private apiUrl = 'https://data.europarl.europa.eu/api/v1';

  public getActiveBelgianMEPs(): Observable<any[]> {
    return this.httpClient.get<any[]>(
      `${this.apiUrl}/meps/show-current?country-of-representation=BE&format=application%2Fld%2Bjson&offset=0`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          accept: 'application/ld+json',
        },
      }
    );
  }
}
