"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useViewer_1 = __importDefault(require("./useViewer"));
function useIsLoggedIn() {
    const viewer = (0, useViewer_1.default)();
    return !!viewer;
}
exports.default = useIsLoggedIn;
