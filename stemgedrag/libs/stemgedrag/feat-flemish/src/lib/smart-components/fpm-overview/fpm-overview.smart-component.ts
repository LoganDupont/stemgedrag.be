import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';

import { rxResource } from '@angular/core/rxjs-interop';
import { FacadeService } from '../../facade.service';

@Component({
  selector: 'sg-fpm-overview',
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    NgOptimizedImage,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './fpm-overview.smart-component.html',
  styleUrls: ['./fpm-overview.smart-component.scss'],
})
export class FpmOverviewSmartComponent {
  private readonly facadeService = inject(FacadeService);

  protected searchValue = signal('');

  private activeFpMembersResource = rxResource({
    loader: () => this.facadeService.getActiveFpMembers(),
  });
  protected activeFpMembers = computed(
    () => this.activeFpMembersResource.value() || []
  );
  protected isActiveFpMembersLoading = computed(() =>
    this.activeFpMembersResource.isLoading()
  );

  protected filteredActiveFpMembers = computed(() => {
    const searchValue = this.searchValue();
    let filteredActiveFpMembers;
    if (!searchValue) {
      filteredActiveFpMembers = this.activeFpMembers();
    }
    filteredActiveFpMembers = this.activeFpMembers().filter(
      (activeFpMember) => {
        const fullName = `${activeFpMember.volksvertegenwoordiger.voornaam} ${activeFpMember.volksvertegenwoordiger.naam}`;
        return fullName.toLowerCase().includes(searchValue.toLowerCase());
      }
    );
    return filteredActiveFpMembers;
  });
}
