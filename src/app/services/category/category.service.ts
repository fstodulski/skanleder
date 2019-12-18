import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { getAllCarCategories } from '../../graphql/query/categories';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CarCategoryModel } from '../../model/car-category';
import { CarQuery } from '../../model/car-query';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private apollo: Apollo) {}

  public getAllCarCategories(): Observable<Array<any>> {
    return this.apollo
      .query<CarQuery>({
        query: getAllCarCategories,
      })
      .pipe(map(({ data }): Array<CarCategoryModel> => data.allCarCategories));
  }
}
