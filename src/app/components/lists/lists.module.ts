import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ParentCategoryComponent } from './parent-category/parent-category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';

// Modules
import { BoxesModule } from '../boxes/boxes.module';

const EXPORTS = [ParentCategoryComponent];

const UI = [BoxesModule];

@NgModule({
  declarations: [...EXPORTS, SubCategoryComponent],
  imports: [CommonModule, ...UI],
  exports: [...EXPORTS],
})
export class ListsModule {}
