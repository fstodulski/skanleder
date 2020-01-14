import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarCategoriesPageRoutingModule } from './car-categories-page-routing.module';

// Components
import { CarCategoriesPageComponent } from './car-categories-page.component';

// UI
import { LayoutModule } from '../../components/layout/layout.module';
import { HeadingModule } from '../../components/heading/heading.module';
import { CarCategoriesModule } from '../../containers/car-categories/car-categories.module';

const UI = [LayoutModule, HeadingModule, CarCategoriesModule];

@NgModule({
  declarations: [CarCategoriesPageComponent],
  imports: [CommonModule, CarCategoriesPageRoutingModule, ...UI],
})
export class CarCategoriesPageModule {}
