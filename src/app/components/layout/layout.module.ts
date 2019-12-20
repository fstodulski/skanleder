import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ContentContainerComponent } from './content-container/content-container.component';

const EXPORT = [ContentContainerComponent];

@NgModule({
  declarations: [...EXPORT],
  imports: [CommonModule],
  exports: [...EXPORT],
})
export class LayoutModule {}
