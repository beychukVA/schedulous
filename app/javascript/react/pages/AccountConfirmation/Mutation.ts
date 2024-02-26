import { gql } from "graphql-tag";

export default gql`
mutation UserSendConfirmationInstructions($input: UserSendConfirmationInstructionsInput!) {
  response: userSendConfirmationInstructions(input: $input) {
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
