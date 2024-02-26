import { gql } from "graphql-tag";

export default gql`
  query Programs {
    programs {
      id
      name
      description
      capacity
      startDate
      image
      frequency
      duration
    }
  }
`;
