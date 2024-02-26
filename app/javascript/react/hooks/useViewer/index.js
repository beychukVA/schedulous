"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Fragment_ts_1 = __importDefault(require("./Fragment.ts"));
const useGraphQLFragment_1 = __importDefault(require("~/hooks/useGraphQLFragment"));
function useViewer() {
    return ((0, useGraphQLFragment_1.default)(Fragment_ts_1.default, "Viewer") || {
        __typename: "Viewer",
        id: null,
    });
}
exports.default = useViewer;
