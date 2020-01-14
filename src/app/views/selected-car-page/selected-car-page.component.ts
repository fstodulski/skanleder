import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

// Services
import { CarService } from '../../services/car/car.service';

@Component({
  selector: 'app-selected-car-page',
  template: `
    <app-heading [withNavigation]="true" theme="black"></app-heading>
    <main class="app-selected-car-page">
      <app-content-container class="app-selected-car-page__main">
        <span class="app-selected-car-page__go-back" routerLink="/prace">
          Wróć do listy
        </span>

        <section class="app-selected-car-page__car-details">
          <article class="car-details">
            <h1 class="car-details__name">
              {{ (selectedCarData$ | async).name }}
            </h1>
            <p class="car-details__category">
              {{ (selectedCarData$ | async).carCategoryName.categoryName }}
            </p>
          </article>
        </section>

        <section class="app-selected-car-page__images-presentation">
          <app-selected-car-images-presentation
            [carPhotos]="(selectedCarData$ | async).photos"
          ></app-selected-car-images-presentation>
        </section>
      </app-content-container>
    </main>
  `,
  styleUrls: ['./selected-car-page.component.scss'],
})
export class SelectedCarPageComponent implements OnInit {
  public selectedCarData$: Observable<any>;

  constructor(private readonly route: ActivatedRoute, private readonly carService: CarService) {}

  ngOnInit(): void {
    this.selectedCarData$ = this.route.paramMap.pipe(
      switchMap(params => {
        const slug = params.get('slug');

        return this.carService.getCarBySlug(slug);
      })
    );
  }
}
