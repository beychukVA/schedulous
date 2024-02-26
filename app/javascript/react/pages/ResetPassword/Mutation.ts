import { gql } from "graphql-tag";

export default gql`
  mutation UserResetPassword($input: UserResetPasswordInput!) {
    response: userResetPassword(input: $input) {
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
