import { ClipboardModule } from '@angular/cdk/clipboard';

import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'stemgedrag-introduction',
    imports: [MatButtonModule, ClipboardModule],
    templateUrl: './introduction.smart-component.html',
    styleUrls: ['./introduction.smart-component.scss']
})
export class IntroductionSmartComponent {}
