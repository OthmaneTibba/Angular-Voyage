import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'voyages',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'voyages',
    pathMatch: 'full',
  },
];
