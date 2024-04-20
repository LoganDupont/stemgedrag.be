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
    {
      name: 'Voor U',
      link: 'https://www.vooru.be/de-12-voor-u',
    },
    {
      name: 'Blanco',
      link: 'https://blanco2024.be/#voorstel',
    },
    {
      name: 'Volt Europa',
      link: 'https://voltbelgie.org/standpunten/beleidsgrondslagen/verkiezingsprogramma-2024',
    },
    {
      name: 'BoerBurgerBelangen (BBB)',
      link: 'https://boerburgerbelangen.vlaanderen/onze-standpunten/',
    },
    {
      name: 'De Belgische Unie - Union Belge (B.U.B.)',
      link: 'https://www.unionbelge.be/#program',
    },
    {
      name: "L'Unie",
      link: 'https://www.lunie.be/nl/vision',
    },
    {
      name: 'Agora',
      link: 'https://nl.agora.brussels/',
    },
    {
      name: 'DierAnimal',
      link: 'https://www.dieranimal.be/nl/home/ons-programma/',
    },
    {
      name: 'Team Fouad Ahidar',
      link: 'https://fouadahidar.com/nl/#programma',
    },
  ].sort((a, b) => a.name.localeCompare(b.name));
}
