import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// GraphQL
import {
  getAllCarCategories,
  getAllParentCarCategories,
  getCarBySlug,
  getCarsByCategory,
} from '../../graphql/query/car';
import { CarCategoryModel } from '../../model/car/car-category';
import { CarsByCategoryQuery } from '../../model/category/cars-by-category.query';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private readonly apollo: Apollo) {}

  public getAllParentCategories(): Observable<any> {
    return this.apollo
      .query({
        query: getAllParentCarCategories,
      })
      .pipe(
        map(({ data }: any) => {
          const { allParentCarCategories } = data;

          return allParentCarCategories;
        })
      );
  }

  public getAllCarCategories(): Observable<any> {
    return this.apollo
      .query({
        query: getAllCarCategories,
      })
      .pipe(
        map(({ data }: any) => {
          const { allParentCarCategories } = data;

          return allParentCarCategories;
        })
      );
  }

  public getCarsByCategory(carCategoryId: number): Observable<any> {
    return this.apollo
      .query<CarsByCategoryQuery>({
        query: getCarsByCategory,
        variables: {
          carCategoryId,
        },
      })
      .pipe(
        map(({ data }) => {
          return data.carCategory.cars;
        })
      );
  }

  public getCarBySlug(slug: string): Observable<any> {
    return this.apollo
      .query<any>({
        query: getCarBySlug,
        variables: {
          slug,
        },
      })
      .pipe(
        map(({ data }) => {
          return data.car;
        })
      );
  }
}
