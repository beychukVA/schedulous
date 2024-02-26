"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
exports.default = (0, graphql_tag_1.gql) `
  mutation UserCreate($input: UserCreateInput!) {
    response: userCreate(input: $input) {
      node {
        email
      }
      errors {
        field
        message
      }
    }
  }
`;
