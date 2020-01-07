import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { DefaultButtonComponent } from './default-button/default-button.component';

// Exports
const EXPORTS = [DefaultButtonComponent];

@NgModule({
  declarations: [...EXPORTS],
  imports: [CommonModule],
  exports: [...EXPORTS],
})
export class ButtonsModule {}
