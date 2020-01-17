import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentlyAddedCarsComponent } from './recently-added-cars.component';

// UI
import { CarsListGridModule } from '../../components/cars-list-grid/cars-list-grid.module';
import { LayoutModule } from '../../components/layout/layout.module';

const EXPORTS = [RecentlyAddedCarsComponent];

const UI = [CarsListGridModule, LayoutModule];

@NgModule({
  declarations: [...EXPORTS],
  imports: [CommonModule, ...UI],
  exports: [...EXPORTS],
})
export class RecentlyAddedCarsModule {}
