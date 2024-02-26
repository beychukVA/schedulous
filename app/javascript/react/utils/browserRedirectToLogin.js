"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const browserRedirect_1 = __importDefault(require("~/utils/browserRedirect"));
const paths_1 = __importDefault(require("~/paths"));
function browserRedirectToLogin() {
    (0, browserRedirect_1.default)(paths_1.default.auth.login({
        origin: encodeURIComponent(location.pathname + location.search),
    }));
}
exports.default = browserRedirectToLogin;
