import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'prace-techniczne',

    loadChildren: () =>
      import('./views/landing-page/landing-page.module').then(module => module.LandingPageModule),
  },
  {
    path: '**',
    redirectTo: '/prace-techniczne',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
