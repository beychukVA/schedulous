"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const reactjs_popup_1 = __importDefault(require("reactjs-popup"));
const Font_1 = __importDefault(require("~/components/Font"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const Resize_jsx_1 = __importDefault(require("~/icons/Resize.jsx"));
const Form_1 = __importDefault(require("~/components//Form"));
function ResizePopup() {
    const [popupStatus, setPopupStatus] = (0, react_1.useState)(false);
    const togglePopup = () => setPopupStatus(!popupStatus);
    const handleLogout = () => { };
    return (<reactjs_popup_1.default key="Search Contacts" on={["click"]} position="top center" className={styles_module_scss_1.default.popup} onOpen={() => togglePopup()} onClose={() => togglePopup()} trigger={<div className={styles_module_scss_1.default.link}>
          <Resize_jsx_1.default color={popupStatus ? "#194BFB" : "#718096"}/>
        </div>}>
      <div className={styles_module_scss_1.default.popupMenu}>
        <Form_1.default.Text name="search" label="Search"/>
        <react_router_dom_1.Link to="" className={styles_module_scss_1.default.popupMenuLink}>
          <Font_1.default size="small" weight="bold">
            Contact’s First Name
          </Font_1.default>
        </react_router_dom_1.Link>
        <hr />
        <react_router_dom_1.Link to="" className={styles_module_scss_1.default.popupMenuLink}>
          <Font_1.default size="small" weight="bold">
            Contact’s Last Name
          </Font_1.default>
        </react_router_dom_1.Link>
        <hr />
        <react_router_dom_1.Link to="" className={styles_module_scss_1.default.popupMenuLink}>
          <Font_1.default size="small" weight="bold">
            Contact’s Email
          </Font_1.default>
        </react_router_dom_1.Link>
        <hr />
        <react_router_dom_1.Link to="" className={styles_module_scss_1.default.popupMenuLink}>
          <Font_1.default size="small" weight="bold">
            Contact’s Phone Number
          </Font_1.default>
        </react_router_dom_1.Link>
        <hr />
      </div>
    </reactjs_popup_1.default>);
}
exports.default = ResizePopup;
