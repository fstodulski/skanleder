import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';

// UI
import { HeadingModule } from '../../components/heading/heading.module';
import { LayoutModule } from '../../components/layout/layout.module';
import { BannersModule } from '../../components/banners/banners.module';
import { FooterModule } from '../../components/footer/footer.module';
import { RecentlyAddedCarsModule } from '../../containers/recently-added-cars/recently-added-cars.module';

// UI Elements
const UI = [HeadingModule, LayoutModule, BannersModule, RecentlyAddedCarsModule, FooterModule];

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomePageRoutingModule, ...UI],
})
export class HomePageModule {}
