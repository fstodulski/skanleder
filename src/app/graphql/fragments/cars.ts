import gql from 'graphql-tag';

export const carFragment = gql`
  fragment carFragment on CarRecord {
    name
    slug
    mainPhoto {
      url
      alt
    }
  }
`;
