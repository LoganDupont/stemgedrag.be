import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { AanwezigheidCommissie } from '@stemgedrag/stemgedrag/type-volks-vertegenwoordiger';

import { PresenceAmountUiComponent } from '../presence-amount/presence-amount.ui-component';

@Component({
  selector: 'sg-commission-presence',
  imports: [CommonModule, PresenceAmountUiComponent, MatCardModule],
  templateUrl: './commission-presence.ui-component.html',
  styleUrl: './commission-presence.ui-component.scss',
})
export class CommissionPresenceUiComponent {
  public commissionPresence = input.required<AanwezigheidCommissie>();

  protected commission = computed(() => this.commissionPresence().commissie);
  protected presencePermanentMember = computed(
    () => this.commissionPresence()['vast-lid-aanwezigheid']
  );
  protected presenceSubstituteMember = computed(
    () => this.commissionPresence()['plaatsvervangend-lid-aanwezigheid']
  );
  private present = computed(
    () =>
      this.presencePermanentMember()?.aanwezig ||
      0 + this.presenceSubstituteMember()?.aanwezig ||
      0
  );
  private apologized = computed(
    () =>
      this.presencePermanentMember()?.verontschuldigd ||
      0 + this.presenceSubstituteMember()?.verontschuldigd ||
      0
  );
  private absent = computed(
    () =>
      this.presencePermanentMember()?.afwezig ||
      0 + this.presenceSubstituteMember()?.afwezig ||
      0
  );
  private total = computed(
    () => this.present() + this.apologized() + this.absent()
  );
  protected presence = computed(() =>
    this.total() ? this.present() / this.total() : 0
  );
}
