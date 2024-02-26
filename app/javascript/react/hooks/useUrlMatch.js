"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
function useUrlMatch(url) {
    const location = (0, react_router_dom_1.useLocation)();
    return location.pathname.startsWith(url);
}
exports.default = useUrlMatch;
