import { inject, Injectable } from '@angular/core';
import { MemberEuropeanParlementService } from '@stemgedrag/stemgedrag/data-access-europe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FacadeService {
  private readonly memberEuropeanParlementService = inject(
    MemberEuropeanParlementService
  );

  public getActiveBelgianMEPs(): Observable<any[]> {
    return this.memberEuropeanParlementService.getActiveBelgianMEPs();
  }
}
