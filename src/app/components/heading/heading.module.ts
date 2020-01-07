import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeadingComponent } from './heading.component';

// UI
import { FigureModule } from '../figure/figure.module';
import { NavigationModule } from '../navigation/navigation.module';
import { LayoutModule } from '../layout/layout.module';

// Exports Components
const EXPORTS = [HeadingComponent];

// UI Modules
const UI = [FigureModule, NavigationModule, LayoutModule];

@NgModule({
  declarations: [...EXPORTS],
  imports: [CommonModule, ...UI],
  exports: [...EXPORTS],
})
export class HeadingModule {}
