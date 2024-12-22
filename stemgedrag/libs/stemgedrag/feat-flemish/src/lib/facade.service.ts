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

  public getActiveFlemishParliamentMembers(): Observable<
    {
      volksvertegenwoordiger: VolksVertegenwoordiger;
    }[]
  > {
    return this.volksVertegenwoordigerService.getActiveFlemishParliamentMembers();
  }

  public getDetailsFlemishParliamentMember(
    id: string
  ): Observable<VolksVertegenwoordigerF> {
    return this.volksVertegenwoordigerService.getDetailsFlemishParliamentMember(
      id
    );
  }

  public getVotesByFlemishParliamentMember(): Observable<any> {
    return this.volksVertegenwoordigerService.getVotesByFlemishParliamentMember();
  }
}
