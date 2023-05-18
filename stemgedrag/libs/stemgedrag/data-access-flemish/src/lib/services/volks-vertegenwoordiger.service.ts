import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';

import { VolksVertegenwoordiger } from '@stemgedrag/stemgedrag/type-volks-vertegenwoordiger';

@Injectable({ providedIn: 'root' })
export class VolksVertegenwoordigerService {
  private readonly httpClient = inject(HttpClient);
  private apiUrl = '/e/opendata';

  public getActiveFlemishParliamentMembers(): Observable<
    {
      volksvertegenwoordiger: VolksVertegenwoordiger;
    }[]
  > {
    return this.httpClient
      .get<any>(`${this.apiUrl}/vv/huidige`)
      .pipe(map((data) => data.items));
  }

  public getVotesByFlemishParliamentMember(): Observable<any> {
    return this.httpClient
      .get<any>(`${this.apiUrl}/verg/vorige?type=plen`)
      .pipe(
        switchMap((verg) =>
          this.httpClient
            .get<any>(`${verg.items[0].vergadering.link[1].href}`)
            .pipe()
        )
      );
  }
}
