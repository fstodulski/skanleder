import { Component, OnInit } from '@angular/core';

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
              Audi A4
            </h1>
            <p class="car-details__category">
              Audi
            </p>
          </article>
        </section>

        <section class="app-selected-car-page__images-presentation">
          <app-selected-car-images-presentation></app-selected-car-images-presentation>
        </section>
      </app-content-container>
    </main>
  `,
  styleUrls: ['./selected-car-page.component.scss'],
})
export class SelectedCarPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
