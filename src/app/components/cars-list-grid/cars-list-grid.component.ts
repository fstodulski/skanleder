import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list-grid',
  template: `
    <section class="app-cars-list-grid">
      <ul class="app-cars-list-grid__list">
        <li
          class="app-cars-list-grid__list-element"
          *ngFor="let car of cars"
          [routerLink]="['/wykonane-prace', car.slug]"
        >
          <app-car-box [car]="car"></app-car-box>
        </li>
      </ul>
    </section>
  `,
  styleUrls: ['./cars-list-grid.component.scss'],
})
export class CarsListGridComponent implements OnInit {
  @Input() public readonly cars: Array<any>;

  ngOnInit(): void {}
}
