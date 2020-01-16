import gql from 'graphql-tag';
import { carFragment } from '../fragments/cars';

export const getCarBySlug = gql`
  query getCarBySlug($slug: String) {
    car(filter: { slug: { eq: $slug } }) {
      mainPhoto {
        alt
        url
      }
      carCategoryName {
        categoryName
      }
      name
      photos {
        alt
        url
      }
    }
  }
`;

export const getAllParentCarCategories = gql`
  query getAllParentCarCategories {
    allParentCarCategories {
      id
      parentCategoryName
    }
  }
`;

export const getAllCarCategories = gql`
  query getAllCarCategories {
    allCarCategories {
      id
      carCategoryName
    }
  }
`;

export const getCarsByCategory = gql`
  query getCarsByCategory($carCategoryId: ItemId) {
    carCategory(filter: { id: { eq: $carCategoryId } }, orderBy: _createdAt_ASC) {
      cars {
        mainPhoto {
          url
          title
        }
        slug
        name
      }
    }
  }
`;
