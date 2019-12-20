import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';

// Exports Components
const EXPORTS = [LogoComponent];

@NgModule({
  declarations: [...EXPORTS],
  imports: [CommonModule],
  exports: [...EXPORTS],
})
export class FigureModule {}
