import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/initial/initial.component').then(
        (c) => c.InitialComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
