"use strict";
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
const react_1 = __importDefault(require("react"));
const styles_module_scss_1 = __importDefault(require("../styles.module.scss"));
const classnames_1 = __importDefault(require("classnames"));
function NumberInput(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    const [isFocus, setFocus] = react_1.default.useState(false);
    return (<div className={styles_module_scss_1.default.container}>
      <label className={(0, classnames_1.default)(styles_module_scss_1.default.label, {
            [styles_module_scss_1.default.labelTop]: props === null || props === void 0 ? void 0 : props.value,
            [styles_module_scss_1.default.labelTopBold]: isFocus,
        })}>
        {props === null || props === void 0 ? void 0 : props["aria-label"]}
      </label>
      <input type="number" className={(0, classnames_1.default)(styles_module_scss_1.default.control, className)} {...props} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}/>
    </div>);
}
exports.default = NumberInput;
