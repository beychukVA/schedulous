"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
function Box({ component: Component, children, m, p, mt, mb, ml, mr, mx, my, px, py, pt, pb, pl, pr, className, backgroundColor, }) {
    const ComponentWithFallback = Component || "div";
    const classes = (0, classnames_1.default)(className, {
        [styles_module_scss_1.default[`m-${m}`]]: m,
        [styles_module_scss_1.default[`p-${p}`]]: p,
        [styles_module_scss_1.default[`mt-${mt}`]]: mt,
        [styles_module_scss_1.default[`mb-${mb}`]]: mb,
        [styles_module_scss_1.default[`ml-${ml}`]]: ml,
        [styles_module_scss_1.default[`mr-${mr}`]]: mr,
        [styles_module_scss_1.default[`mx-${mx}`]]: mx,
        [styles_module_scss_1.default[`my-${my}`]]: my,
        [styles_module_scss_1.default[`px-${px}`]]: px,
        [styles_module_scss_1.default[`py-${py}`]]: py,
        [styles_module_scss_1.default[`pt-${pt}`]]: pt,
        [styles_module_scss_1.default[`pb-${pb}`]]: pb,
        [styles_module_scss_1.default[`pl-${pl}`]]: pl,
        [styles_module_scss_1.default[`pr-${pr}`]]: pr,
        [styles_module_scss_1.default[`bg-${backgroundColor}`]]: backgroundColor,
    });
    return (<ComponentWithFallback className={classes}>
      {children}
    </ComponentWithFallback>);
}
exports.default = Box;
