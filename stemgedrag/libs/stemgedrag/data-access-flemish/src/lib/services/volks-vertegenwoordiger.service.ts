import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, map, Observable, switchMap } from 'rxjs';

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
      .get<any>(`${this.apiUrl}/verg/vorige?type=plen&dagen=31`)
      .pipe(
        switchMap((verg) =>
          this.httpClient.get<any>(`${verg.items[0].vergadering.link[1].href}`)
        ),
        map((vergDetail) =>
          vergDetail.vergadering['agenda-item']
            .filter(
              (agendaItem: any) =>
                agendaItem['agenda-lijn'][0]['agenda-lijn-type']?.naam ===
                'Hoofdelijke stemming'
            )
            .map(
              (agendaItem: any) =>
                agendaItem['agenda-lijn'][0]['parlementair-initiatief'][0]
                  .link[0].href
            )
        ),
        switchMap((urls: string[]) => {
          const parlementairInitiatives = urls.map((url) =>
            this.httpClient.get<any>(url)
          );
          return forkJoin(parlementairInitiatives);
        }),
        map((parlementairInitiatives) =>
          parlementairInitiatives.map((parlementairInitiatives: any) => ({
            title: parlementairInitiatives.titel,
            filewebpath: parlementairInitiatives.filewebpath,
            stemming:
              parlementairInitiatives['journaallijn-stemmingen'].stemming[0],
          }))
        )
      );
  }
}
