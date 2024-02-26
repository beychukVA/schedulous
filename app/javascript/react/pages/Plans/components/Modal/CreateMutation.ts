import { gql } from "graphql-tag";

export default gql`
  mutation PlanCreate($input: PlanCreateInput!) {
    response: planCreate(input: $input) {
      node {
        id
        name
        amount
        interval
        intervalType
      }
      errors {
        field
        message
      }
    }
  }
`;
