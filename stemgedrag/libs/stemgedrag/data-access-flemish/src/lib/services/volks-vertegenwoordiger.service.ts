import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, map, Observable, switchMap } from 'rxjs';

import { VolksVertegenwoordiger } from '@stemgedrag/stemgedrag/type-volks-vertegenwoordiger';

@Injectable({ providedIn: 'root' })
export class VolksVertegenwoordigerService {
  private readonly httpClient = inject(HttpClient);
  private apiUrl = 'https://ws.vlpar.be/e/opendata';
  private headers = {
    accept: 'application/json;charset=UTF-8',
  };

  public getActiveFlemishParliamentMembers(): Observable<
    {
      volksvertegenwoordiger: VolksVertegenwoordiger;
    }[]
  > {
    return this.httpClient
      .get<any>(`${this.apiUrl}/vv/huidige`, { headers: this.headers })
      .pipe(map((data) => data.items));
  }

  public getVotesByFlemishParliamentMember(): Observable<any> {
    return this.httpClient
      .get<any>(`${this.apiUrl}/verg/vorige?type=plen&dagen=100`, {
        headers: this.headers,
      })
      .pipe(
        switchMap((verg) =>
          this.httpClient.get<any>(
            `${verg.items[0].vergadering.link[1].href}`,
            { headers: this.headers }
          )
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
            this.httpClient.get<any>(url, { headers: this.headers })
          );
          return forkJoin(parlementairInitiatives);
        }),
        map((parlementairInitiatives) =>
          parlementairInitiatives.map((parlementairInitiatives: any) => ({
            title: parlementairInitiatives.titel,
            filewebpath: parlementairInitiatives.filewebpath,
            link: `https://www.vlaamsparlement.be/nl/parlementaire-documenten/parlementaire-initiatieven/${parlementairInitiatives.id}`,
            stemming:
              parlementairInitiatives['journaallijn-stemmingen'].stemming[0],
          }))
        )
      );
  }
}
