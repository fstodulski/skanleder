import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectedCarPageRoutingModule } from './selected-car-page-routing.module';

// Components
import { SelectedCarPageComponent } from './selected-car-page.component';

// UI
import { LayoutModule } from '../../components/layout/layout.module';
import { HeadingModule } from '../../components/heading/heading.module';
import { SelectedCarImagesPresentationModule } from '../../containers/selected-car-images-presentation/selected-car-images-presentation.module';

const UI = [LayoutModule, HeadingModule, SelectedCarImagesPresentationModule];

@NgModule({
  declarations: [SelectedCarPageComponent],
  imports: [CommonModule, SelectedCarPageRoutingModule, ...UI],
})
export class SelectedCarPageModule {}
