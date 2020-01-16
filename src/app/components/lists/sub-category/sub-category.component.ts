import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CarService } from '../../../services/car/car.service';

@Component({
  selector: 'app-sub-category',
  template: `
    <div class="app-sub-category">
      <h3 class="app-sub-category__brand-name" (click)="fetchCarsForCategory(subCategory.id)">
        {{ subCategory.carCategoryName }}
      </h3>
      <ul
        class="app-sub-category__list"
        [ngClass]="{
          'app-sub-category__list--active': (cars$ | async)?.length > 0
        }"
      >
        <app-car-box *ngFor="let car of cars$ | async" [car]="car"></app-car-box>
      </ul>
    </div>
  `,
  styleUrls: ['./sub-category.component.scss'],
})
export class SubCategoryComponent implements OnInit {
  @Input() public readonly subCategory: Array<any>;
  public cars$: Observable<any>;

  constructor(private readonly carService: CarService) {}

  ngOnInit(): void {
    this.cars$ = of([]);
  }

  public fetchCarsForCategory(categoryID: number): void {
    this.cars$ = this.carService.getCarsByCategory(categoryID);
  }
}
