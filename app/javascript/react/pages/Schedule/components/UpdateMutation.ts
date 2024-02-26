import { gql } from "graphql-tag";

export default gql`
  mutation ProgramUpdate($input: ProgramUpdateInput!) {
    response: programUpdate(input: $input) {
      node {
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
      errors {
        field
        message
      }
    }
  }
`;
