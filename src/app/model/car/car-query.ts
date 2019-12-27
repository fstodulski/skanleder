import { CarModel } from './car';

export interface GetAllCarCategoriesQuery {
  allCarCategories: Array<{
    categoryName: string;
    cars: Array<CarModel>;
  }>;
}
