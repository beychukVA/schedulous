"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_apollo_1 = require("react-apollo");
function createComponentWithQuery({ component, query, queryVariables, fetchPolicy }) {
    const { loading, error, data } = (0, react_apollo_1.useQuery)(query, {
        variables: queryVariables,
        fetchPolicy: fetchPolicy
    });
    if (loading)
        return <p>Loading...</p>;
    if (error)
        return <p>Error :(</p>;
    return component(data);
}
exports.default = createComponentWithQuery;
