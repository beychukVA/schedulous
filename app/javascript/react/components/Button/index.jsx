"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
function Button({ title, onClick, style = "primary", size = "medium", className, disabled = false, disabledTitle = "", block = false, type = "button", }) {
    const classes = (0, classnames_1.default)(styles_module_scss_1.default.button, {
        [styles_module_scss_1.default.buttonPrimary]: style === "primary",
        [styles_module_scss_1.default.buttonSecondary]: style === "secondary",
        [styles_module_scss_1.default.buttonTertiary]: style === "tertiary",
        [styles_module_scss_1.default.buttonBlack]: style === "black",
        [styles_module_scss_1.default.buttonSmall]: size === "small",
        [styles_module_scss_1.default.buttonMedium]: size === "medium",
        [styles_module_scss_1.default.buttonBlock]: block,
    }, className);
    return (<button onClick={onClick} type={type} disabled={disabled} className={classes}>
      {disabled && disabledTitle ? disabledTitle : title}
    </button>);
}
exports.default = Button;
