import { AanwezigheidCommissieAantal } from './aanwezigheid-commissie-aantal.type';
import { CommissieLI } from './commissie-list-item.type';

export type AanwezigheidCommissie = Readonly<{
  commissie: CommissieLI;
  'voorzitter-aanwezigheid': AanwezigheidCommissieAantal;
  'vast-lid-aanwezigheid': AanwezigheidCommissieAantal;
  'plaatsvervangend-lid-aanwezigheid': AanwezigheidCommissieAantal;
  'toegevoegd-lid-aanwezigheid': AanwezigheidCommissieAantal;
  'niet-lid-aanwezigheid': AanwezigheidCommissieAantal;
}>;
