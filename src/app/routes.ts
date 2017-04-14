import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { ListingsListComponent } from './listings/listings-list.component';
import { Error404Component } from './errors/404.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'listings', component: ListingsListComponent },
  { path: '404', component: Error404Component },
];

export const routing = RouterModule.forRoot(routes);
