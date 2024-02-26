"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertNever = exports.dataIdFromObject = exports.hasNextPage = exports.loadMore = exports.updateFragment = exports.updateQuery = exports.responseErrors = exports.responseNode = exports.polymorphicInput = exports.isPresent = exports.isEmpty = exports.first = exports.get = exports.length = exports.toArray = exports.forEach = exports.map = void 0;
const update_1 = __importDefault(require("~/utils/update"));
const lodash_1 = require("lodash");
function map(list, fn) {
    return Array.isArray(list)
        ? list.map(fn)
        : list.edges.map(({ node }, i) => fn(node, i));
}
exports.map = map;
function forEach(list, fn) {
    return Array.isArray(list)
        ? list.forEach(fn)
        : list.edges.forEach(({ node }, i) => fn(node, i));
}
exports.forEach = forEach;
function toArray(list) {
    return map(list, (node) => node);
}
exports.toArray = toArray;
function length(list) {
    return Array.isArray(list) ? list.length : list.edges.length;
}
exports.length = length;
function get(list, i) {
    if (Array.isArray(list)) {
        return list[i] || null;
    }
    return list.edges[i] ? list.edges[i].node : null;
}
exports.get = get;
function first(list) {
    return get(list, 0);
}
exports.first = first;
function isEmpty(list) {
    return length(list) === 0;
}
exports.isEmpty = isEmpty;
function isPresent(list) {
    return length(list) > 0;
}
exports.isPresent = isPresent;
function polymorphicInput(name, subject) {
    return {
        [`${name}Id`]: subject.id,
        [`${name}Type`]: subject.__typename,
    };
}
exports.polymorphicInput = polymorphicInput;
function responseNode(response) {
    var _a, _b;
    return (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.node;
}
exports.responseNode = responseNode;
function responseErrors(response) {
    if (!response ||
        !response.data ||
        !response.data.response ||
        !response.data.response.errors ||
        response.data.response.errors.length === 0) {
        return null;
    }
    return response.data.response.errors.reduce((acc, error) => {
        acc[error.field] = error.message;
        return acc;
    }, {});
}
exports.responseErrors = responseErrors;
function updateQuery({ cache, query, variables, update: changes, }) {
    const queryData = cache.readQuery({ query, variables });
    cache.writeQuery({ query, variables, data: (0, update_1.default)(queryData, changes) });
}
exports.updateQuery = updateQuery;
function updateFragment({ cache, fragment, fragmentName, id, update: changes, variables = {}, }) {
    const fragmentData = cache.readFragment({
        fragment,
        variables,
        fragmentName,
        id,
    });
    cache.writeFragment({
        fragment,
        fragmentName,
        id,
        variables,
        data: (0, update_1.default)(fragmentData, changes),
    });
}
exports.updateFragment = updateFragment;
function loadMore({ fetchMore, connectionPath, cursorName, variables, endCursor, }) {
    return fetchMore({
        variables: Object.assign(Object.assign({}, (variables || {})), { [cursorName || "cursor"]: endCursor }),
        updateQuery(previousResult, { fetchMoreResult }) {
            const connection = (0, lodash_1.get)(fetchMoreResult, connectionPath);
            return update_1.default.path(previousResult, connectionPath, {
                $mergeConnection: connection,
            });
        },
    });
}
exports.loadMore = loadMore;
function hasNextPage(connection) {
    return connection.pageInfo.hasNextPage;
}
exports.hasNextPage = hasNextPage;
function dataIdFromObject(object) {
    if (object.__typename === "Viewer") {
        return object.__typename;
    }
    if (object.id && object.__typename) {
        return object.__typename + object.id;
    }
    return "";
}
exports.dataIdFromObject = dataIdFromObject;
function assertNever(x) {
    throw new Error("Unexpected object: " + x);
}
exports.assertNever = assertNever;
