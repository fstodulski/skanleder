import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car/car.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-car-categories-page',
  template: `
    <app-heading [withNavigation]="true" theme="black"></app-heading>
    <main class="app-car-categories-page">
      <app-content-container class="app-car-categories-page__main">
        <span class="app-car-categories-page__go-back" routerLink="/">
          Wróć do strony głównej
        </span>

        <app-car-categories [categories]="carCategories$ | async"></app-car-categories>
      </app-content-container>
    </main>
  `,
  styleUrls: ['./car-categories-page.component.scss'],
})
export class CarCategoriesPageComponent implements OnInit {
  public carCategories$: Observable<any>;

  constructor(private readonly carService: CarService) {}

  ngOnInit(): void {
    this.carCategories$ = this.carService.getAllParentCategories();
  }
}
