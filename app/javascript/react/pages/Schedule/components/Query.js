"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
exports.default = (0, graphql_tag_1.gql) `
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
