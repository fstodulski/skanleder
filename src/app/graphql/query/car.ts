import gql from 'graphql-tag';

export const getCarBySlug = gql`
  query getCarBySlug($slug: String) {
    car(filter: { slug: { eq: $slug } }) {
      carCategoryName {
        carCategoryName
        id
      }
      mainPhoto {
        url
        alt
      }
      name
      slug
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

export const getAllSubCategories = gql`
  query getAllSubCategories($parentCategoryName: String) {
    parentCarCategory(filter: { parentCategoryName: { eq: $parentCategoryName } }) {
      subCategories {
        carCategoryName
        id
      }
    }
  }
`;

export const getCarsByCategory = gql`
  query getCarsByCategory($carCategoryName: String) {
    carCategory(filter: { carCategoryName: { eq: $carCategoryName } }, orderBy: _createdAt_ASC) {
      cars {
        mainPhoto {
          url
          alt
        }
        slug
        name
      }
    }
  }
`;

export const getRecentlyAddedCars = gql`
  query getRecentlyAddedCars {
    allCars(first: "10", orderBy: _createdAt_ASC) {
      name
      mainPhoto {
        url
        alt
      }
      slug
    }
  }
`;
