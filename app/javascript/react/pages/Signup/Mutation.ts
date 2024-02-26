import { gql } from "graphql-tag";

export default gql`
  mutation UserCreate($input: UserCreateInput!) {
    response: userCreate(input: $input) {
      node {
        email
      }
      errors {
        field
        message
      }
    }
  }
`;
