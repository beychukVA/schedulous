import { gql } from "graphql-tag";

export default gql`
  query TeamMembers {
    teamMembers {
      id
      user {
        id
        email
        person {
          name
        }
      }
      role
    }
  }
`;
