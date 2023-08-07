import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'stemgedrag-introduction',
  standalone: true,
  imports: [CommonModule, MatButtonModule, ClipboardModule],
  templateUrl: './introduction.smart-component.html',
  styleUrls: ['./introduction.smart-component.css'],
})
export class IntroductionSmartComponent {}
