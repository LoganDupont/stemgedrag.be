import { Route } from '@angular/router';
import { StemgedragFeatShellComponent } from './stemgedrag-feat-shell/stemgedrag-feat-shell.component';

export const stemgedragFeatShellRoutes: Route[] = [
  {
    path: '',
    component: StemgedragFeatShellComponent,
    children: [
      {
        path: 'europe',
        loadChildren: () =>
          import('@stemgedrag/stemgedrag/feat-europe').then(
            (mod) => mod.stemgedragFeatEuropeRoutes
          ),
      },
    ],
  },
];
