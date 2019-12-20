import { Component, OnInit } from '@angular/core';
import { CategoryService } from './services/category/category.service';
import { Observable } from 'rxjs';
import { CarCategoryModel } from './model/car/car-category';

@Component({
  selector: 'app-root',
  template: `
    <p *ngFor="let category of categories$ | async">
      {{ category.categoryName }}

      <span *ngFor="let car of category.cars">
        {{ car.name }}
      </span>
    </p>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public categories$: Observable<Array<CarCategoryModel>>;
  constructor(public readonly categoryService: CategoryService) {}

  public ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCarCategories();
    this.categoryService.getCarsByCategory(1964849).subscribe(res => console.log(res));
  }
}
