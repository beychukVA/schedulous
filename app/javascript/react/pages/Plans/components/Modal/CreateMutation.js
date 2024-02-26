"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
exports.default = (0, graphql_tag_1.gql) `
  mutation PlanCreate($input: PlanCreateInput!) {
    response: planCreate(input: $input) {
      node {
        id
        name
        amount
        interval
        intervalType
      }
      errors {
        field
        message
      }
    }
  }
`;
