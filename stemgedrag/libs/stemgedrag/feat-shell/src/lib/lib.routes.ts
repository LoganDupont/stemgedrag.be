import { Route } from '@angular/router';
import { StemgedragFeatShellComponent } from './stemgedrag-feat-shell/stemgedrag-feat-shell.component';

export const stemgedragFeatShellRoutes: Route[] = [
  {
    path: '',
    component: StemgedragFeatShellComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@stemgedrag/stemgedrag/feat-home').then(
            (mod) => mod.stemgedragFeatHomeRoutes
          ),
      },
      {
        path: 'europe',
        loadChildren: () =>
          import('@stemgedrag/stemgedrag/feat-europe').then(
            (mod) => mod.stemgedragFeatEuropeRoutes
          ),
      },
      {
        path: 'federal',
        loadChildren: () =>
          import('@stemgedrag/stemgedrag/feat-federal').then(
            (mod) => mod.stemgedragFeatFederalRoutes
          ),
      },
      {
        path: 'flemish',
        loadChildren: () =>
          import('@stemgedrag/stemgedrag/feat-flemish').then(
            (mod) => mod.stemgedragFeatFlemishRoutes
          ),
      },
    ],
  },
];
