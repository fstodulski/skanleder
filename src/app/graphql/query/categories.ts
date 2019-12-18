import gql from 'graphql-tag';

export const getAllCarCategories = gql`
  query getAllCarCategories {
    allCarCategories {
      categoryName
      cars {
        name
        mainPhoto {
          url
        }
      }
    }
  }
`;
