import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { RecentAddedCarsComponent } from './recent-added-cars.component';

// UI
import { BoxesModule } from '../../components/boxes/boxes.module';
import { LayoutModule } from '../../components/layout/layout.module';

const UI = [BoxesModule, LayoutModule];

@NgModule({
  declarations: [RecentAddedCarsComponent],
  imports: [CommonModule, RouterModule, ...UI],
  exports: [RecentAddedCarsComponent],
})
export class RecentAddedCarsModule {}
