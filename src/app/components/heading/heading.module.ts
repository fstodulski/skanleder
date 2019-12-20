import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeadingComponent } from './heading.component';

// UI
import { FigureModule } from '../figure/figure.module';
import { NavigationModule } from '../navigation/navigation.module';

// Exports Components
const EXPORTS = [HeadingComponent];

// UI Modules
const UI = [FigureModule, NavigationModule];

@NgModule({
  declarations: [...EXPORTS],
  imports: [CommonModule, ...UI],
  exports: [...EXPORTS],
})
export class HeadingModule {}
