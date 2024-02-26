"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
exports.default = (0, graphql_tag_1.gql) `
  mutation ProgramCreate($input: ProgramCreateInput!) {
    response: programCreate(input: $input) {
      node {
        id
        name
        description
        capacity
        startDate
        image
        frequency
        duration
      }
      errors {
        field
        message
      }
    }
  }
`;
