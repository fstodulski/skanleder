import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// GraphQL
import {
  getAllParentCarCategories,
  getAllSubCategories,
  getCarBySlug,
  getCarsByCategory,
  getRecentlyAddedCars,
} from '../../graphql/query/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private readonly apollo: Apollo) {}

  // In usage
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

  public getAllSubCategories(parentCategoryName: string): Observable<any> {
    return this.apollo
      .query({
        query: getAllSubCategories,
        variables: {
          parentCategoryName,
        },
      })
      .pipe(
        map(({ data }: any) => {
          const { parentCarCategory } = data;

          return parentCarCategory.subCategories;
        })
      );
  }

  public getRecentlyAddedCars(): Observable<any> {
    return this.apollo
      .query({
        query: getRecentlyAddedCars,
      })
      .pipe(map(({ data }: any) => data.allCars));
  }

  public getCarsByCategory(carCategoryName: string): Observable<any> {
    return this.apollo
      .query({
        query: getCarsByCategory,
        variables: {
          carCategoryName,
        },
      })
      .pipe(map(({ data }: any) => data.carCategory.cars));
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
