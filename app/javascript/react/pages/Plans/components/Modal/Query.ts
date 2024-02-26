import { gql } from "graphql-tag";

export default gql`
  query Plan($id: ID!) {
    plan(id: $id) {
      name
    }
  }
`;
