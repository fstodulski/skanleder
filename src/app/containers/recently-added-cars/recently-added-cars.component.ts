import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recently-added-cars',
  template: `
    <app-content-container class="app-recently-added-cars">
      <h2 class="app-recently-added-cars__heading">
        Ostatnio dodane prace
      </h2>
      <app-cars-list-grid [cars]="cars"></app-cars-list-grid>
    </app-content-container>
  `,
  styleUrls: ['./recently-added-cars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentlyAddedCarsComponent implements OnInit {
  @Input() public readonly cars: Array<any>;

  constructor() {}

  ngOnInit() {}
}
