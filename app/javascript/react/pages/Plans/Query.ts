import { gql } from "graphql-tag";

export default gql`
  query Plans {
    plans {
      id
      name
      amount
      interval
      intervalType
    }
  }
`;
