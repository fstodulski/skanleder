import gql from 'graphql-tag';

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
