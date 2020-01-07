import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { getCarBySlug } from '../../graphql/query/car';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private readonly apollo: Apollo) {}

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
          console.log(data);
          return data.car;
        })
      );
  }
}
