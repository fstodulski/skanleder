import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sub-categories',
  template: `
    <div class="app-sub-categories">
      <ul class="app-sub-categories__list">
        <li *ngFor="let subCategory of subCategories" class="app-sub-categories__list-element">
          <span
            class="sub-category"
            [ngClass]="{ 'sub-category--active': (model$ | async) == subCategory.carCategoryName }"
            [routerLink]="['/wykonane-prace']"
            [queryParams]="{ model: subCategory.carCategoryName }"
            queryParamsHandling="merge"
          >
            {{ subCategory.carCategoryName }}
          </span>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./sub-categories.component.scss'],
})
export class SubCategoriesComponent implements OnInit {
  @Input() public readonly subCategories: Array<any>;

  public model$: Observable<string>;

  constructor(private readonly route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.model$ = this.route.queryParamMap.pipe(map(res => res.get('model')));
  }
}
