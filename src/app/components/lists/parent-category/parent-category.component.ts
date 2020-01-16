import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-category',
  template: `
    <div class="app-parent-category">
      <h3 class="app-parent-category__brand-name">
        {{ parentCategoryData.parentCategoryName }}
      </h3>
      <app-sub-category></app-sub-category>
    </div>
  `,
  styleUrls: ['./parent-category.component.scss'],
})
export class ParentCategoryComponent implements OnInit {
  @Input() public readonly parentCategoryData: any;

  constructor() {}

  ngOnInit() {}
}
