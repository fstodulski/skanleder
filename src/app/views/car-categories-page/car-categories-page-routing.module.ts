import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { CarCategoriesPageComponent } from './car-categories-page.component';

const routes: Routes = [
  {
    path: '',
    component: CarCategoriesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarCategoriesPageRoutingModule {}
