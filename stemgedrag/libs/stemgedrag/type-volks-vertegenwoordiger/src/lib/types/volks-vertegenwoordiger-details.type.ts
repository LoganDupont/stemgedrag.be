export type VolksVertegenwoordigerF = Readonly<{
  id: number;
  'aanwezigheden-huidige-legislatuur': {
    'commissie-aanw': {
      commissie: {
        afkorting: string;
        datumvan: string;
        id: number;
        link: {
          href: string;
          rel: string;
        }[];
        titel: string;
      };
      'plaatsvervangend-lid-aanwezigheid': {
        afwezig: number;
      };
    }[];
    'plenaire-aanw': {
      verontschuldigd: number;
      afwezig: number;
      aanwezig: number;
    };
  };
  fotowebpath: string;
  huidigefractie: {
    logo: string;
  };
  naam: string;
  voornaam: string;
  email: string[];
}>;
