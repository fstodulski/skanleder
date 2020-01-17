import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { SubCategoriesComponent } from './sub-categories.component';

const EXPORTS = [SubCategoriesComponent];

@NgModule({
  declarations: [...EXPORTS],
  imports: [CommonModule, RouterModule],
  exports: [...EXPORTS],
})
export class SubCategoriesModule {}
