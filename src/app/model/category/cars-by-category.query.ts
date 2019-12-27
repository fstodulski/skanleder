import { CarModel } from '../car/car';

export interface CarsByCategoryQuery {
  carCategory: {
    categoryName: string;
    cars: Array<CarModel>;
  };
}
