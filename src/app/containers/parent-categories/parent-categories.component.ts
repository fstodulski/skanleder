import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CarService } from '../../services/car/car.service';

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
          >
            {{ parentCategory.parentCategoryName }}
          </span>
        </li>
      </ul>

      <app-sub-categories
        *ngIf="(subCategories$ | async)?.length > 0"
        [subCategories]="subCategories$ | async"
      ></app-sub-categories>
    </div>
  `,
  styleUrls: ['./parent-categories.component.scss'],
})
export class ParentCategoriesComponent implements OnInit {
  public activeBrand$: Observable<string>;
  public subCategories$: Observable<Array<any>>;

  @Input() public readonly parentCategories: Array<any>;

  constructor(private readonly route: ActivatedRoute, private readonly carService: CarService) {}

  ngOnInit(): void {
    this.activeBrand$ = this.route.queryParamMap.pipe(
      map(res => {
        const brand = res.get('brand');

        if (brand) {
          this.fetchSubCategories(brand);

          return brand;
        }
      })
    );
  }

  private fetchSubCategories(brandName: string): void {
    this.subCategories$ = this.carService.getAllSubCategories(brandName);
  }
}
