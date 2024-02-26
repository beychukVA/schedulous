"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const immutability_helper_1 = __importDefault(require("immutability-helper"));
const lodash_1 = require("lodash");
const updateHelper = immutability_helper_1.default;
updateHelper.extend("$removeItem", (item, items) => {
    const updatedItems = items.filter(({ id }) => item.id !== id);
    return [...updatedItems];
});
updateHelper.extend("$removeNode", (node, _a) => {
    var { edges } = _a, others = __rest(_a, ["edges"]);
    return Object.assign(Object.assign({}, others), { edges: edges.filter(({ node: { id } }) => node.id !== id) });
});
updateHelper.extend("$prependNode", (node, _a) => {
    var { edges } = _a, others = __rest(_a, ["edges"]);
    return Object.assign(Object.assign({}, others), { edges: [{ node }, ...edges] });
});
updateHelper.extend("$prependNodeUnique", (node, _a) => {
    var { edges } = _a, others = __rest(_a, ["edges"]);
    return Object.assign(Object.assign({}, others), { edges: (0, lodash_1.uniqBy)([{ node }, ...edges], "node.id") });
});
updateHelper.extend("$appendNode", (node, _a) => {
    var { edges } = _a, others = __rest(_a, ["edges"]);
    return Object.assign(Object.assign({}, others), { edges: [...edges, { node }] });
});
updateHelper.extend("$mergeConnection", (_a, connection) => {
    var { edges } = _a, others = __rest(_a, ["edges"]);
    return Object.assign(Object.assign(Object.assign({}, connection), others), { edges: [].concat(connection.edges, edges) });
});
updateHelper.extend("$append", (node, array) => {
    return [...array, node];
});
updateHelper.extend("$prepend", (node, array) => {
    return [node, ...array];
});
updateHelper.extend("$remove", (node, array) => {
    return array.filter(({ id }) => node.id !== id);
});
updateHelper.extend("$moveNodeIndex", ({ oldIndex, newIndex }, _a) => {
    var { edges } = _a, other = __rest(_a, ["edges"]);
    const copy = [...edges];
    copy.splice(newIndex, 0, copy.splice(oldIndex, 1)[0]);
    return Object.assign(Object.assign({}, other), { edges: copy });
});
updateHelper.path = (object, path, changes) => {
    const toUpdate = {};
    (0, lodash_1.setWith)(toUpdate, path, changes);
    return updateHelper(object, toUpdate);
};
exports.default = updateHelper;
