import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';

// Components
import { LandingPageComponent } from './landing-page.component';

// Modules
import { FigureModule } from '../../components/figure/figure.module';
import { HeadingModule } from '../../components/heading/heading.module';
import { LayoutModule } from '../../components/layout/layout.module';
import { FooterModule } from '../../components/footer/footer.module';

const UI = [FigureModule, HeadingModule, LayoutModule, FooterModule];

@NgModule({
  declarations: [LandingPageComponent],
  imports: [CommonModule, LandingPageRoutingModule, ...UI],
})
export class LandingPageModule {}
