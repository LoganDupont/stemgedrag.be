import { AanwezigheidCommissie } from './aanwezigheid-commissie.type';

export type VolksVertegenwoordigerF = Readonly<{
  id: number;
  'aanwezigheden-huidige-legislatuur': {
    'commissie-aanw': AanwezigheidCommissie[];
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
