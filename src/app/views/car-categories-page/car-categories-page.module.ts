import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarCategoriesPageRoutingModule } from './car-categories-page-routing.module';

// Components
import { CarCategoriesPageComponent } from './car-categories-page.component';

// UI
import { LayoutModule } from '../../components/layout/layout.module';
import { HeadingModule } from '../../components/heading/heading.module';
import { ParentCategoriesModule } from '../../containers/parent-categories/parent-categories.module';
import { CarsListGridModule } from '../../components/cars-list-grid/cars-list-grid.module';

const UI = [LayoutModule, HeadingModule, ParentCategoriesModule, CarsListGridModule];

@NgModule({
  declarations: [CarCategoriesPageComponent],
  imports: [CommonModule, CarCategoriesPageRoutingModule, ...UI],
})
export class CarCategoriesPageModule {}
