import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Commune } from '@stemgedrag/stemgedrag/type-commune';

@Injectable({ providedIn: 'root' })
export class CommuneService {
  private readonly httpClient = inject(HttpClient);

  public getCommunes(): Observable<Commune[]> {
    return this.httpClient.get<Commune[]>(`assets/json/communes.json`);
  }
}
