import { inject, Injectable } from '@angular/core';
import { CommuneService } from '@stemgedrag/stemgedrag/data-access-commune';
import { Observable } from 'rxjs';

import { Commune } from '@stemgedrag/stemgedrag/type-commune';

@Injectable({
  providedIn: 'root',
})
export class FacadeService {
  private readonly communeService = inject(CommuneService);

  public getCommunes(): Observable<Commune[]> {
    return this.communeService.getCommunes();
  }
}
