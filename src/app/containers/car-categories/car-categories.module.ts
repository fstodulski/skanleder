import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CarCategoriesComponent } from './car-categories.component';

const EXPORTS = [CarCategoriesComponent];

@NgModule({
  declarations: [...EXPORTS],
  imports: [CommonModule],
  exports: [...EXPORTS],
})
export class CarCategoriesModule {}
