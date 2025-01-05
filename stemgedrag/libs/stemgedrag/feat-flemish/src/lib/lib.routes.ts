import { Route } from '@angular/router';
import { FpmDetailSmartComponent } from './smart-components/fpm-detail/fpm-detail.smart-component';
import { FpmOverviewSmartComponent } from './smart-components/fpm-overview/fpm-overview.smart-component';

export const stemgedragFeatFlemishRoutes: Route[] = [
  { path: '', component: FpmOverviewSmartComponent },
  {
    path: ':id',
    component: FpmDetailSmartComponent,
    children: [
      {
        path: '',
        redirectTo: 'voting',
        pathMatch: 'full',
      },
      {
        path: 'voting',
        loadComponent: () =>
          import(
            './smart-components/vote-record-overview/vote-record-overview.smart-component'
          ).then((c) => c.VoteRecordOverviewSmartComponent),
      },
      {
        path: 'commissions',
        loadComponent: () =>
          import(
            './smart-components/commissions-overview/commissions-overview.smart-component'
          ).then((c) => c.CommissionsOverviewSmartComponent),
      },
    ],
  },
];
