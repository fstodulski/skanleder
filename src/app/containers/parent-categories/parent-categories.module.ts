import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { ParentCategoriesComponent } from './parent-categories.component';
import { SubCategoriesModule } from '../sub-categories/sub-categories.module';

const EXPORTS = [ParentCategoriesComponent];

const UI = [SubCategoriesModule];

@NgModule({
  declarations: [...EXPORTS],
  imports: [CommonModule, RouterModule, ...UI],
  exports: [...EXPORTS],
})
export class ParentCategoriesModule {}
