import { gql } from "graphql-tag";

export default gql`
  mutation PersonCreate($input: PersonCreateInput!) {
    response: personCreate(input: $input) {
      node {
        id
        name
        user {
          id
          email
          phone
        }
      }
      errors {
        field
        message
      }
    }
  }
`;
