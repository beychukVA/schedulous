"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
exports.default = (0, graphql_tag_1.gql) `
  mutation PersonCreate($input: PersonCreateInput!) {
    response: personCreate(input: $input) {
      node {
        id
        name
        user {
          id
          email
          phone
        }
      }
      errors {
        field
        message
      }
    }
  }
`;
