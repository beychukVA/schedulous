import { gql } from "graphql-tag";

export default gql`
  mutation PlanUpdate($input: PlanUpdateInput!) {
    response: planUpdate(input: $input) {
      node {
        id
        name
      }
    }
  }
`;
