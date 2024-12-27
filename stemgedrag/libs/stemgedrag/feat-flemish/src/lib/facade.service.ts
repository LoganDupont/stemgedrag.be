import { inject, Injectable } from '@angular/core';
import { VolksVertegenwoordigerService } from '@stemgedrag/stemgedrag/data-access-flemish';
import { Observable } from 'rxjs';

import {
  VolksVertegenwoordiger,
  VolksVertegenwoordigerF,
} from '@stemgedrag/stemgedrag/type-volks-vertegenwoordiger';

@Injectable({
  providedIn: 'root',
})
export class FacadeService {
  private readonly volksVertegenwoordigerService = inject(
    VolksVertegenwoordigerService
  );

  public getActiveFpMembers(): Observable<
    {
      volksvertegenwoordiger: VolksVertegenwoordiger;
    }[]
  > {
    return this.volksVertegenwoordigerService.getActiveFpMembers();
  }

  public getDetailsFpMember(id: string): Observable<VolksVertegenwoordigerF> {
    return this.volksVertegenwoordigerService.getDetailsFpMember(id);
  }

  public getVotesByFpMember(): Observable<any> {
    return this.volksVertegenwoordigerService.getVotesByFpMember();
  }
}
