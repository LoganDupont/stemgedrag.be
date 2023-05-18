import { Route } from '@angular/router';
import { MepOverviewSmartComponent } from './smart-components/mep-overview/mep-overview.smart-component';
import { MepDetailSmartComponent } from './smart-components/mep-detail/mep-detail.smart-component';

export const stemgedragFeatEuropeRoutes: Route[] = [
  {
    path: '',
    component: MepOverviewSmartComponent,
  },
  { path: ':id', component: MepDetailSmartComponent },
];
