import { gql } from "graphql-tag";

export default gql`
  mutation UserSignIn($input: UserSignInInput!) {
    response: userSignIn(input: $input) {
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
