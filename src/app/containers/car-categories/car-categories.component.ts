import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-categories',
  template: `
    <section class="app-car-categories">
      <h1 class="app-car-categories__heading">
        Kategorie aut
      </h1>
    </section>
    <div class="app-car-categories__brands">
      {{ categories | json }}
      <app-parent-category
        *ngFor="let parentCategory of categories"
        [parentCategoryData]="parentCategory"
      ></app-parent-category>
    </div>
  `,
  styleUrls: ['./car-categories.component.scss'],
})
export class CarCategoriesComponent implements OnInit {
  @Input() public readonly categories: Array<any>;

  constructor() {}

  ngOnInit() {}
}
