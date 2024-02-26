"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Font_1 = __importDefault(require("~/components/Font"));
const Flex_1 = __importDefault(require("~/components/Flex"));
const useUrlMatch_1 = __importDefault(require("~/hooks/useUrlMatch"));
function SubNavLink({ title, bubble, to, onClick }) {
    let props = {
        to: to,
        onClick: onClick,
    };
    const selected = (0, useUrlMatch_1.default)(to);
    return (<react_router_dom_1.Link {...props}>
      <Flex_1.default.Row pl="small" pr="small" mb="small" justify="space-between">
        <Font_1.default block={true} size="small" color={selected ? "primary" : "gray-900"} weight="medium">
          {title}
        </Font_1.default>
        {bubble && (<Font_1.default color={selected ? "primary" : "gray-500"} weight="bold">
            {bubble}
          </Font_1.default>)}
      </Flex_1.default.Row>
    </react_router_dom_1.Link>);
}
exports.default = SubNavLink;
