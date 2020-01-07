import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { DefaultFooterComponent } from './default-footer/default-footer.component';

// UI
import { FigureModule } from '../figure/figure.module';

const EXPORTS = [DefaultFooterComponent];

const UI = [FigureModule];

@NgModule({
  declarations: [...EXPORTS],
  imports: [CommonModule, ...UI],
  exports: [...EXPORTS],
})
export class FooterModule {}
