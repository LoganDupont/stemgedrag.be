export type CommissieLI = Readonly<{
  afkorting: string;
  datumvan: string;
  datumtot: string;
  id: number;
  link: {
    href: string;
    rel: string;
  }[];
  titel: string;
}>;
