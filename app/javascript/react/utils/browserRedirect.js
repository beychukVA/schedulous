"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
function browserRedirect(location) {
    const navigate = (0, react_router_dom_1.useNavigate)();
    if (location.as.startsWith("http")) {
        window.location.href = location.href;
    }
    else {
        navigate(location.href);
    }
}
exports.default = browserRedirect;
