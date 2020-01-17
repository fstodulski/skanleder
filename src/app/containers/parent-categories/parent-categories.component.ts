import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-parent-categories',
  template: `
    <div class="app-parent-categories">
      <ul class="app-parent-categories__list">
        <li
          *ngFor="let parentCategory of parentCategories"
          class="app-parent-categories__list-element"
        >
          <span
            class="parent-category"
            [ngClass]="{
              'parent-category--active': parentCategory.parentCategoryName == (activeBrand$ | async)
            }"
            [routerLink]="['/wykonane-prace']"
            [queryParams]="{ brand: parentCategory.parentCategoryName }"
            queryParamsHandling="merge"
          >
            {{ parentCategory.parentCategoryName }}
          </span>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./parent-categories.component.scss'],
})
export class ParentCategoriesComponent implements OnInit {
  public activeBrand$: Observable<string>;

  @Input() public readonly parentCategories: Array<any>;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeBrand$ = this.route.queryParamMap.pipe(map(res => res.get('brand')));
  }
}
