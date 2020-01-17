import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { CarsListGridComponent } from './cars-list-grid.component';

// UI
import { BoxesModule } from '../boxes/boxes.module';
import { LayoutModule } from '../layout/layout.module';

const UI = [BoxesModule, LayoutModule];

const EXPORTS = [CarsListGridComponent];

@NgModule({
  declarations: [...EXPORTS],
  imports: [CommonModule, RouterModule, ...UI],
  exports: [...EXPORTS],
})
export class CarsListGridModule {}
