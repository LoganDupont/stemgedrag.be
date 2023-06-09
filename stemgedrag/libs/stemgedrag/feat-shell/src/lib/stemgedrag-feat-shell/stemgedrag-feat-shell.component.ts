import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sg-stemgedrag-feat-shell',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule],
  templateUrl: './stemgedrag-feat-shell.component.html',
  styleUrls: ['./stemgedrag-feat-shell.component.scss'],
})
export class StemgedragFeatShellComponent {}
