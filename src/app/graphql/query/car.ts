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
