import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { MainPageBannerComponent } from './main-page-banner/main-page-banner.component';

// UI
import { LayoutModule } from '../layout/layout.module';

// Exports
const EXPORTS = [MainPageBannerComponent];

const UI = [LayoutModule];

@NgModule({
  declarations: [...EXPORTS],
  imports: [CommonModule, ...UI],
  exports: [...EXPORTS],
})
export class BannersModule {}
