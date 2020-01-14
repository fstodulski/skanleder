import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectedCarPageRoutingModule } from './selected-car-page-routing.module';

// Components
import { SelectedCarPageComponent } from './selected-car-page.component';

// UI
import { LayoutModule } from '../../components/layout/layout.module';
import { HeadingModule } from '../../components/heading/heading.module';
import { SelectedCarImagesPresentationModule } from '../../containers/selected-car-images-presentation/selected-car-images-presentation.module';
import { NavigationModule } from '../../components/navigation/navigation.module';

const UI = [LayoutModule, HeadingModule, SelectedCarImagesPresentationModule, NavigationModule];

@NgModule({
  declarations: [SelectedCarPageComponent],
  imports: [CommonModule, SelectedCarPageRoutingModule, ...UI],
})
export class SelectedCarPageModule {}
