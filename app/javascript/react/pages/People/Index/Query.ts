import { gql } from "graphql-tag";

export default gql`
  query PeopleIndex {
    people {
      id
      name
      firstName
      lastName
      user {
        id
        email
      }
    }
  }
`;
