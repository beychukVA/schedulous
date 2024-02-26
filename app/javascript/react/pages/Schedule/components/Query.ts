import { gql } from "graphql-tag";

export default gql`
  query Program($id: ID!) {
    program(id: $id) {
      id
      name
      description
      capacity
      startDate
      image
      duration
      programTimeslots {
        id
        monday
        tuesday
        wednesday
        thursday
        friday
        saturday
        sunday
        hour
        meridiem
        minute
      }
    }
  }
`;
