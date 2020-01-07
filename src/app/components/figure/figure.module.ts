import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { LogoComponent } from './logo/logo.component';

// Exports Components
const EXPORTS = [LogoComponent];

@NgModule({
  declarations: [...EXPORTS],
  imports: [CommonModule, RouterModule],
  exports: [...EXPORTS],
})
export class FigureModule {}
