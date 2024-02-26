"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Query_1 = __importDefault(require("./Query"));
const visitor_1 = require("graphql/language/visitor");
const Fragment_1 = __importDefault(require("~/hooks/useViewer/Fragment"));
const useGraphQLFragment_1 = __importDefault(require("~/hooks/useGraphQLFragment"));
const [operation, fragments] = Query_1.default.definitions;
function addContextToQuery(query) {
    if (!query) {
        return Query_1.default;
    }
    const isContextLoaded = (0, useGraphQLFragment_1.default)(Fragment_1.default, "Viewer");
    if (isContextLoaded) {
        return query;
    }
    // Documentation https://graphql.org/graphql-js/language/#visit
    const newQuery = (0, visitor_1.visit)(query, {
        OperationDefinition(node) {
            return Object.assign(Object.assign({}, node), { selectionSet: Object.assign(Object.assign({}, node.selectionSet), { selections: [
                        ...node.selectionSet.selections,
                        ...operation.selectionSet.selections,
                    ] }) });
        },
    });
    newQuery.definitions = newQuery.definitions.concat(fragments);
    return newQuery;
}
exports.default = addContextToQuery;
