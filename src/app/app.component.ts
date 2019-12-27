import { Component, OnInit } from '@angular/core';
import { CategoryService } from './services/category/category.service';
import { Observable } from 'rxjs';
import { CarCategoryModel } from './model/car-category';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public categories$: Observable<Array<CarCategoryModel>>;
  constructor(public readonly categoryService: CategoryService) {}

  public ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCarCategories();
  }
}
