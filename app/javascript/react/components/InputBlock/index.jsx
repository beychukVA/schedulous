"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
function InputBlock({ title, subtitle, children }) {
    return (<div className={(0, classnames_1.default)(styles_module_scss_1.default.blockWrapper)}>
      <div className={(0, classnames_1.default)(styles_module_scss_1.default.titleWrapper)}>
        <div className={(0, classnames_1.default)(styles_module_scss_1.default.title)}>
          {title}
        </div>

        <div className={(0, classnames_1.default)(styles_module_scss_1.default.subtitle)}>
          {subtitle}
        </div>
      </div>

      <div className={(0, classnames_1.default)(styles_module_scss_1.default.inputWrapper)}>
        {children}
      </div>
    </div>);
}
exports.default = InputBlock;
