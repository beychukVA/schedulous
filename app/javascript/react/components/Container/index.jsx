"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
function Container({ children, className }) {
    return (<div className={(0, classnames_1.default)(styles_module_scss_1.default.container, className)}>{children}</div>);
}
exports.default = Container;
Container.Small = function ({ children, className }) {
    return (<div className={(0, classnames_1.default)(styles_module_scss_1.default.container, styles_module_scss_1.default.containerSmall, className)}>
      {children}
    </div>);
};
Container.XSmall = function ({ children, className }) {
    return (<div className={(0, classnames_1.default)(styles_module_scss_1.default.container, styles_module_scss_1.default.containerXSmall, className)}>
      {children}
    </div>);
};
