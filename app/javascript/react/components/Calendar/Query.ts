import { gql } from "graphql-tag";

export default gql`
  query ProgramInstances {
    programInstances {
      id
      name
      hour
      minute
      meridiem
      militaryStartTime
      militaryEndTime
      datetime
      duration
      type
    }
  }
`;
