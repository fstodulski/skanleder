import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-categories',
  template: `
    <section class="app-car-categories">
      <h1 class="app-car-categories__heading">
        Kategorie aut
      </h1>
    </section>
  `,
  styleUrls: ['./car-categories.component.scss'],
})
export class CarCategoriesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
