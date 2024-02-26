import { gql } from "graphql-tag";

export default gql`
  mutation ProgramCreate($input: ProgramCreateInput!) {
    response: programCreate(input: $input) {
      node {
        id
        name
        description
        capacity
        startDate
        image
        frequency
        duration
      }
      errors {
        field
        message
      }
    }
  }
`;
