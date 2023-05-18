import { Route } from '@angular/router';
import { FpmOverviewSmartComponent } from './smart-components/fpm-overview/fpm-overview.smart-component';
import { FpmDetailSmartComponent } from './smart-components/fpm-detail/fpm-detail.smart-component';

export const stemgedragFeatFlemishRoutes: Route[] = [
  { path: '', component: FpmOverviewSmartComponent },
  { path: ':id', component: FpmDetailSmartComponent },
];
