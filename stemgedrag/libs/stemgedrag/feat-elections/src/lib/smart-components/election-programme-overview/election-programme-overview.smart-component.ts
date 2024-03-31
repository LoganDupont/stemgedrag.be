import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-election-programme-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './election-programme-overview.smart-component.html',
  styleUrl: './election-programme-overview.smart-component.css',
})
export class ElectionProgrammeOverviewSmartComponent {
  protected parties: any[] = [
    {
      name: 'Vooruit',
      link: 'https://www.vooruit.org/programma-download',
    },
    {
      name: 'PVDA',
      link: 'https://www.pvda.be/programma',
    },
    {
      name: 'Groen',
      link: 'https://www.groen.be/programma',
    },
    {
      name: 'CD&V',
      link: 'https://www.cdenv.be/verkiezingen_2024',
    },
    {
      name: 'Open VLD',
      link: 'https://www.openvld.be/verkiezingsprogramma_open_vld',
    },
    {
      name: 'N-VA',
      link: 'https://www.n-va.be/',
    },
    {
      name: 'Vlaams Belang',
      link: 'https://www.vlaamsbelang.org/programma',
    },
  ];
}
