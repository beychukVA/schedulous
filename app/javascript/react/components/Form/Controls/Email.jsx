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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const styles_module_scss_1 = __importDefault(require("../styles.module.scss"));
const classnames_1 = __importDefault(require("classnames"));
function EmailInput(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    const [isFocus, setFocus] = React.useState(false);
    return (<div className={styles_module_scss_1.default.container}>
      <label className={(0, classnames_1.default)(styles_module_scss_1.default.label, {
            [styles_module_scss_1.default.labelTop]: props === null || props === void 0 ? void 0 : props.value,
            [styles_module_scss_1.default.labelTopBold]: isFocus,
        })}>
        {props === null || props === void 0 ? void 0 : props["aria-label"]}
      </label>
      <input type="email" className={(0, classnames_1.default)(styles_module_scss_1.default.control, className)} {...props} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}/>
    </div>);
}
exports.default = EmailInput;
