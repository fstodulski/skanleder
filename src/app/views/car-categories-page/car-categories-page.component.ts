import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car/car.service';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-car-categories-page',
  template: `
    <app-heading [withNavigation]="true" theme="black"></app-heading>
    <main class="app-car-categories-page">
      <app-content-container class="app-car-categories-page__main">
        <span class="app-car-categories-page__go-back" routerLink="/">
          Wróć do strony głównej
        </span>

        <app-parent-categories [parentCategories]="carCategories$ | async"></app-parent-categories>
        <app-cars-list-grid
          [cars]="cars$ | async"
          class="app-car-categories-page__cars-list-grid"
        ></app-cars-list-grid>
      </app-content-container>
    </main>
  `,
  styleUrls: ['./car-categories-page.component.scss'],
})
export class CarCategoriesPageComponent implements OnInit {
  public carCategories$: Observable<any>;
  public cars$: Observable<Array<any>>;

  constructor(
    private readonly title: Title,
    private readonly carService: CarService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setTitle();
    this.carCategories$ = this.carService.getAllParentCategories();

    this.cars$ = this.route.queryParamMap.pipe(
      map(query => query.get('model')),
      switchMap(model => (model ? this.carService.getCarsByCategory(model) : of([])))
    );
  }

  private setTitle(): void {
    this.title.setTitle('Skanleder - Wykonane Prace');
  }
}
