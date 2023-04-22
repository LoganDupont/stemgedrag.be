import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'sg-stemgedrag-feat-shell',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule],
  templateUrl: './stemgedrag-feat-shell.component.html',
  styleUrls: ['./stemgedrag-feat-shell.component.scss'],
})
export class StemgedragFeatShellComponent {}
