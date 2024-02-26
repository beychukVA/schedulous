import { gql } from "graphql-tag";

export default gql`
  query AccountsSearch($name: String) {
    accountsSearch(name: $name) {
      id
      name
    }
  }
`;
