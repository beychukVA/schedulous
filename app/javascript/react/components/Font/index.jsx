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
const classnames_1 = __importDefault(require("classnames"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const Box_1 = __importDefault(require("~/components/Box"));
function Font(_a) {
    var props = __rest(_a, []);
    const { block, center, strike, underline, uppercase, lowercase, capitalize, color, size, weight, children, className } = props, rest = __rest(props, ["block", "center", "strike", "underline", "uppercase", "lowercase", "capitalize", "color", "size", "weight", "children", "className"]);
    const classes = (0, classnames_1.default)({
        [styles_module_scss_1.default.center]: center,
        [styles_module_scss_1.default.strike]: strike,
        [styles_module_scss_1.default.underline]: underline,
        [styles_module_scss_1.default.uppercase]: uppercase,
        [styles_module_scss_1.default.lowercase]: lowercase,
        [styles_module_scss_1.default.capitalize]: capitalize,
        [styles_module_scss_1.default[size]]: size,
        [styles_module_scss_1.default[`${weight}Weight`]]: weight,
        [styles_module_scss_1.default[`color-${color}`]]: color,
    }, className);
    const isBlockElement = block || center;
    const baseElement = isBlockElement ? "div" : "span";
    return (<Box_1.default {...rest} className={classes} component={baseElement}>
      {children}
    </Box_1.default>);
}
exports.default = Font;
