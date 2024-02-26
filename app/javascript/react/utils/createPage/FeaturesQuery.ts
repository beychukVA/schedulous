import gql from 'graphql-tag';

export default gql`
  query FeaturesQuery {
    viewer {
      features
    }
  }
`;
