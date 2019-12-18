import { CarModel } from './car';

export interface CarQuery {
  allCarCategories: Array<{
    categoryName: string;
    cars: Array<CarModel>;
  }>;
}
