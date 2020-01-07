import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarBoxComponent } from './car-box/car-box.component';

const EXPORTS = [CarBoxComponent];

@NgModule({
  declarations: [...EXPORTS],
  imports: [CommonModule],
  exports: [...EXPORTS],
})
export class BoxesModule {}
