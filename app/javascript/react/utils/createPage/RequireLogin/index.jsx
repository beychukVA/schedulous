"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useIsLoggedIn_1 = __importDefault(require("~/hooks/useIsLoggedIn"));
const browserRedirectToLogin_1 = __importDefault(require("~/utils/browserRedirectToLogin"));
function RequireLogin({ children }) {
    const isLoggedIn = (0, useIsLoggedIn_1.default)();
    if (!isLoggedIn) {
        if (process.browser) {
            (0, browserRedirectToLogin_1.default)();
        }
        return null;
    }
    return children;
}
exports.default = RequireLogin;
