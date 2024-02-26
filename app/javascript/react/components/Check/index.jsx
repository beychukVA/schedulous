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
const classnames_1 = __importDefault(require("classnames"));
const CheckIcon_1 = __importDefault(require("~/icons/toggle/CheckIcon"));
const Close_1 = __importDefault(require("~/icons/Close"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
function Check({ size = "Small", square, selected, color = "blue", removable = false, }) {
    const [isHover, setHover] = (0, react_1.useState)(false);
    const className = (0, classnames_1.default)(styles_module_scss_1.default.check, styles_module_scss_1.default[`check${size}`], {
        [styles_module_scss_1.default.checkSquare]: square,
        [styles_module_scss_1.default.checkSelectedBlue]: selected && color === "blue",
        [styles_module_scss_1.default.checkSelectedGreen]: selected && color === "green",
        [styles_module_scss_1.default.checkSelectedRed]: removable && isHover && selected && color === "green",
    });
    const hoveron = () => setHover(true);
    const hoveroff = () => setHover(false);
    return (<div className={className} onMouseEnter={hoveron} onMouseLeave={hoveroff}>
      {removable
            ? !isHover
                ? selected && <CheckIcon_1.default />
                : selected && <Close_1.default color="#fff" width="10" height="10"/>
            : selected && <CheckIcon_1.default />}
    </div>);
}
exports.default = Check;
