"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContext = void 0;
const react_1 = __importDefault(require("react"));
const state_1 = require("./state");
exports.UserContext = react_1.default.createContext({
    state: state_1.initialUserState,
    dispatch: () => undefined,
});
