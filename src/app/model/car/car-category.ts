import { CarModel } from './car';

export interface CarCategoryModel {
  categoryName: string;
  cars: Array<CarModel>;
}
