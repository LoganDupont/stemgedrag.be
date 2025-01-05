import { AanwezigheidCommissieAantal } from './aanwezigheid-commissie-aantal.type';
import { CommissieLI } from './commissie-list-item.type';

export type AanwezigheidCommissie = Readonly<{
  commissie: CommissieLI;
  'vast-lid-aanwezigheid': AanwezigheidCommissieAantal;
  'plaatsvervangend-lid-aanwezigheid': AanwezigheidCommissieAantal;
}>;
