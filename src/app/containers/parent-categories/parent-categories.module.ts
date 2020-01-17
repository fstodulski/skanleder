import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { ParentCategoriesComponent } from './parent-categories.component';

const EXPORTS = [ParentCategoriesComponent];

@NgModule({
  declarations: [...EXPORTS],
  imports: [CommonModule, RouterModule],
  exports: [...EXPORTS],
})
export class ParentCategoriesModule {}
