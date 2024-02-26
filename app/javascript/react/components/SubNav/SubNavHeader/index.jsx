"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Font_1 = __importDefault(require("~/components/Font"));
function Header({ title }) {
    return (<>
      <Font_1.default block={true} size="xSmall" uppercase={true} weight="xBold" color="gray-600" mb="small" mt="medium">
        {title}
      </Font_1.default>
    </>);
}
exports.default = Header;
