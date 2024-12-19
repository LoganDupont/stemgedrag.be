import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { FacadeService } from '../../facade.service';

@Component({
    selector: 'sg-commune-overview',
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
    ],
    templateUrl: './commune-overview.smart-component.html',
    styleUrls: ['./commune-overview.smart-component.scss']
})
export class CommuneOverviewSmartComponent {
  private readonly facadeService = inject(FacadeService);

  searchValue = signal('');
  communes = toSignal(this.facadeService.getCommunes(), { initialValue: [] });

  filteredCommunes = computed(() => {
    const searchValue = this.searchValue();
    let filteredCommunes;
    if (!searchValue) {
      filteredCommunes = this.communes();
    }
    filteredCommunes = this.communes().filter((commune) =>
      commune.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return filteredCommunes.sort((a, b) => a.name.localeCompare(b.name));
  });
}
