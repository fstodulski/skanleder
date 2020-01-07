import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { SelectedCarImagesPresentationComponent } from './selected-car-images-presentation.component';

// UI
import { BoxesModule } from '../../components/boxes/boxes.module';

const EXPORTS = [SelectedCarImagesPresentationComponent];

const UI = [BoxesModule];

@NgModule({
  declarations: [...EXPORTS],
  imports: [CommonModule, RouterModule, ...UI],
  exports: [...EXPORTS],
})
export class SelectedCarImagesPresentationModule {}
