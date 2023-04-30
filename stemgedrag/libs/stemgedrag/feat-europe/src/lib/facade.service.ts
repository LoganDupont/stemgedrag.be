import { inject, Injectable } from '@angular/core';
import { MemberEuropeanParlementService } from '@stemgedrag/stemgedrag/data-access-europe';
import { Observable } from 'rxjs';

import { Mep } from '@stemgedrag/stemgedrag/type-mep';

@Injectable({
  providedIn: 'root',
})
export class FacadeService {
  private readonly memberEuropeanParlementService = inject(
    MemberEuropeanParlementService
  );

  public getActiveBelgianMEPs(): Observable<Mep[]> {
    return this.memberEuropeanParlementService.getActiveBelgianMEPs();
  }
}
