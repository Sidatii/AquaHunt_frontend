import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'pages',
  //   pathMatch: 'full'
  // },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'layouts',
    loadChildren: () => import('./layouts/layouts.module').then(m => m.LayoutsModule)
  },
  {
    path: 'routes',
    loadChildren: () => import('./routes/routes.module').then(m => m.RoutesModule)
  }
];
