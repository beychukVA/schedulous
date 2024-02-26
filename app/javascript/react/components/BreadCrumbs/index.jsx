"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Font_1 = __importDefault(require("~/components/Font"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
function BreadCrumb({ data }) {
    return (<div>
      {data.map((value, index) => (<Font_1.default key={index} block={false}>
          {index !== 0 && <a className={styles_module_scss_1.default.textHeader}>/</a>}
          {!!value.url ? (<react_router_dom_1.Link className={styles_module_scss_1.default.textHeaderLink} to={value.url}>
              {value.title}
            </react_router_dom_1.Link>) : (<a className={styles_module_scss_1.default.textHeader}>{value.title}</a>)}
        </Font_1.default>))}
    </div>);
}
exports.default = BreadCrumb;
