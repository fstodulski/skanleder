import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CarCategoriesComponent } from './car-categories.component';

// Modules
import { ListsModule } from '../../components/lists/lists.module';

const EXPORTS = [CarCategoriesComponent];

const UI = [ListsModule];

@NgModule({
  declarations: [...EXPORTS],
  imports: [CommonModule, ...UI],
  exports: [...EXPORTS],
})
export class CarCategoriesModule {}
