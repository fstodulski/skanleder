import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-category',
  template: `
    <div class="app-car-category">
      <ul class="app-car-category__brands-list">
        <li class="app-car-category__brand-name">
          BMW
        </li>
        <li class="app-car-category__brand-name">
          Mercedes
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./car-category.component.scss'],
})
export class CarCategoryComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
