import { gql } from "graphql-tag";

export default gql`
mutation UserSendResetPasswordInstructions($input: UserSendResetPasswordInstructionsInput!) {
  response: userSendResetPasswordInstructions(input: $input) {
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
