"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Admin_1 = __importDefault(require("~/layouts/Admin"));
const SettingsNav_1 = __importDefault(require("~/components/SettingsNav"));
const Container_1 = __importDefault(require("~/components/Container"));
function SettingsLayout({ title, children, cta, full = false, }) {
    const Component = full ? Container_1.default : Container_1.default.XSmall;
    return (<Admin_1.default title={title} subnav={<SettingsNav_1.default />} cta={cta}>
      <Component>{children}</Component>
    </Admin_1.default>);
}
exports.default = SettingsLayout;
