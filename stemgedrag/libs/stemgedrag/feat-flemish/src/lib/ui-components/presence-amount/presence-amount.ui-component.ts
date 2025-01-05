import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { AanwezigheidCommissieAantal } from '@stemgedrag/stemgedrag/type-volks-vertegenwoordiger';

@Component({
  selector: 'sg-presence-amount',
  imports: [CommonModule],
  templateUrl: './presence-amount.ui-component.html',
  styleUrl: './presence-amount.ui-component.scss',
})
export class PresenceAmountUiComponent {
  public name = input.required<string>();
  public presenceAmount = input.required<AanwezigheidCommissieAantal>();

  protected present = computed(() => this.presenceAmount()?.aanwezig || 0);
  protected apologized = computed(
    () => this.presenceAmount()?.verontschuldigd || 0
  );
  protected absent = computed(() => this.presenceAmount()?.afwezig || 0);
  protected total = computed(
    () => this.present() + this.apologized() + this.absent()
  );
}
