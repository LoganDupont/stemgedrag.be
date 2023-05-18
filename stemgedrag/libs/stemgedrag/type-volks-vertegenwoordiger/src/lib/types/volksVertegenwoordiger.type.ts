export type VolksVertegenwoordiger = Readonly<{
  id: string;
  deelstaatsenator: boolean;
  fotowebpath: string;
  fractie: {
    id: number;
    kleur: string;
    logo: string;
    naam: string;
    zetelAantal: 0;
  };
  isHuidigeVV: string;
  kieskring: string;
  links: [
    {
      deprecation: string;
      href: string;
      hreflang: string;
      media: string;
      rel: string;
      templated: boolean;
      title: string;
      type: string;
    }
  ];
  naam: string;
  voornaam: string;
  zetel: string;
}>;
