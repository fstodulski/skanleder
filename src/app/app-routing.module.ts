import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'prace-techniczne',
    loadChildren: () =>
      import('./views/landing-page/landing-page.module').then(module => module.LandingPageModule),
  },
  {
    path: 'strona-glowna',
    loadChildren: () =>
      import('./views/home-page/home-page.module').then(module => module.HomePageModule),
  },
  {
    path: 'wykonane-prace',
    loadChildren: () =>
      import('./views/car-categories-page/car-categories-page.module').then(
        module => module.CarCategoriesPageModule
      ),
  },
  {
    path: 'wykonane-prace/:slug',
    loadChildren: () =>
      import('./views/selected-car-page/selected-car-page.module').then(
        module => module.SelectedCarPageModule
      ),
  },
  {
    path: '',
    redirectTo: '/strona-glowna',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/strona-glowna',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
