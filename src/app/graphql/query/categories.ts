import gql from 'graphql-tag';
import { carFragment } from '../fragments/cars';

export const getAllCarCategories = gql`
  query getAllCarCategories {
    allCarCategories {
      categoryName
      cars {
        ...carFragment
      }
    }
  }

  ${carFragment}
`;

export const getCarsByCategory = gql`
  query getCarsByCategory($carCategoryId: ItemId) {
    carCategory(filter: { id: { eq: $carCategoryId } }) {
      categoryName
      cars {
        ...carFragment
      }
    }
  }

  ${carFragment}
`;
