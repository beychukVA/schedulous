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
const margins_1 = require("~/types/margins");
const Box_1 = __importDefault(require("~/components/Box"));
const TSSafeStyles = styles_module_scss_1.default;
function Flex(_a) {
    var { align = "center", children, className, direction = "row", grow, justify = "center", maxWidth, margin, mobileAlign, mobileDirection, mobileJustify, wrap, itemMargin, autoWidth } = _a, otherProps = __rest(_a, ["align", "children", "className", "direction", "grow", "justify", "maxWidth", "margin", "mobileAlign", "mobileDirection", "mobileJustify", "wrap", "itemMargin", "autoWidth"]);
    const flexStyles = Object.assign({ flexGrow: grow }, (maxWidth === "none" ? {} : { maxWidth: maxWidth || "100%" }));
    const flexClassName = (0, classnames_1.default)(styles_module_scss_1.default.flex, TSSafeStyles[`flex-align-${align}`], TSSafeStyles[`flex-direction-${direction}`], TSSafeStyles[`flex-justify-${justify}`], TSSafeStyles[`${direction}-item-margin-${itemMargin}`], TSSafeStyles[`mobile-flex-align-${mobileAlign}`], TSSafeStyles[`mobile-flex-direction-${mobileDirection}`], TSSafeStyles[`mobile-flex-justify-${mobileJustify}`], margin && margins_1.marginStyles[margin], wrap && TSSafeStyles["flex-wrap"], autoWidth && TSSafeStyles["flex-auto-width"], className);
    return (<Box_1.default style={flexStyles} className={flexClassName} {...otherProps}>
      {children}
    </Box_1.default>);
}
exports.default = Flex;
Flex.Column = (props) => (<Flex direction="column" align="flex-start" mobileAlign="center" {...props}/>);
Flex.StaticColumn = (props) => (<Flex direction="column" align="flex-start" {...props}/>);
Flex.Row = (props) => (<Flex direction="row" justify="flex-start" mobileDirection="column" mobileAlign="center" {...props}/>);
Flex.StaticRow = (props) => (<Flex direction="row" justify="flex-start" {...props}/>);
Flex.Expand = (_a) => {
    var { className, align } = _a, props = __rest(_a, ["className", "align"]);
    return (<div className={(0, classnames_1.default)(styles_module_scss_1.default.expand, align === "right" && styles_module_scss_1.default.right, className)} {...props}/>);
};
