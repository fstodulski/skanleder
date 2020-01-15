import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-categories-page',
  template: `
    <app-heading [withNavigation]="true" theme="black"></app-heading>
    <main class="app-car-categories-page">
      <app-content-container class="app-car-categories-page__main">
        <span class="app-car-categories-page__go-back" routerLink="/">
          Wróć do strony głównej
        </span>
        <app-car-categories></app-car-categories>
      </app-content-container>
    </main>
  `,
  styleUrls: ['./car-categories-page.component.scss'],
})
export class CarCategoriesPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
