import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

// Query
import { getAllCarCategories, getCarsByCategory } from '../../graphql/query/categories';

// Models
import { CarCategoryModel } from '../../model/car/car-category';
import { CarsByCategoryQuery } from '../../model/category/cars-by-category.query';
import { GetAllCarCategoriesQuery } from '../../model/car/car-query';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private readonly apollo: Apollo) {}

  public getAllCarCategories(): Observable<Array<CarCategoryModel>> {
    return this.apollo
      .query<GetAllCarCategoriesQuery>({
        query: getAllCarCategories,
      })
      .pipe(map(({ data }): Array<CarCategoryModel> => data.allCarCategories));
  }

  public getCarsByCategory(carCategoryId: number): Observable<CarCategoryModel> {
    return this.apollo
      .query<CarsByCategoryQuery>({
        query: getCarsByCategory,
        variables: {
          carCategoryId,
        },
      })
      .pipe(map(({ data }): CarCategoryModel => data.carCategory));
  }
}
