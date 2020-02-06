import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

// Services
import { CarService } from '../../services/car/car.service';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-selected-car-page',
  template: `
    <app-heading [withNavigation]="true" theme="black"></app-heading>
    <main class="app-selected-car-page">
      <app-content-container class="app-selected-car-page__main">
        <span class="app-selected-car-page__go-back" (click)="goBack()">
          Wróć do listy
        </span>
        <section class="app-selected-car-page__car-details" *ngIf="selectedCarData$ | async">
          <article class="car-details">
            <h1 class="car-details__name">
              {{ (selectedCarData$ | async)?.name }}
            </h1>
            <p
              class="car-details__category"
              [routerLink]="['/wykonane-prace']"
              [queryParams]="{
                brand: (selectedCarData$ | async)?.brand.parentCategoryName,
                model: (selectedCarData$ | async)?.carCategoryName.carCategoryName
              }"
              queryParamsHandling="merge"
            >
              {{ (selectedCarData$ | async)?.carCategoryName.carCategoryName }}
            </p>
          </article>
        </section>

        <section class="app-selected-car-page__images-presentation">
          <app-selected-car-images-presentation
            [carPhotos]="(selectedCarData$ | async)?.photos"
          ></app-selected-car-images-presentation>
        </section>
      </app-content-container>
    </main>
    <app-content-container>
      <app-default-footer></app-default-footer>
    </app-content-container>
  `,
  styleUrls: ['./selected-car-page.component.scss'],
})
export class SelectedCarPageComponent implements OnInit {
  public selectedCarData$: Observable<any>;

  constructor(
    private readonly title: Title,
    private readonly route: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly carService: CarService,
    private readonly location: Location
  ) {}

  ngOnInit(): void {
    this.selectedCarData$ = this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        const slug = params.get('slug');

        return this.carService.getCarBySlug(slug);
      }),
      map(response => {
        const { name } = response;
        console.log(response);
        this.title.setTitle(`Skanleder - ${name}`);

        return response;
      })
    );
  }

  public goBack(): void {
    this.location.back();
  }
}
