import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";

export const routes: Routes = [
  // {
  //   path: 'pages',
  //   loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  // },
  // {
  //   path: 'layouts',
  //   loadChildren: () => import('./layouts/layouts.module').then(m => m.LayoutsModule)
  // },
  {
    path: '',
    loadChildren: () => import('./routes/routes.module').then(m => m.RoutesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class appRoutingModule { }
