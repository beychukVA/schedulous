"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Font_1 = __importDefault(require("~/components/Font"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
function Setting({ title, subtitle, icon, link }) {
    return (<react_router_dom_1.Link to={link} className={styles_module_scss_1.default.setting}>
      <div className={styles_module_scss_1.default.settingInner}>
        <div className={styles_module_scss_1.default.settingIcon}>{icon}</div>
        <div className={styles_module_scss_1.default.settingContent}>
          <Font_1.default component="h3" size="large" color="gray-900" weight="xBold">
            {title}
          </Font_1.default>
          <Font_1.default component="p" size="small" color="gray-600">
            {subtitle}
          </Font_1.default>
        </div>
      </div>
    </react_router_dom_1.Link>);
}
exports.default = Setting;
