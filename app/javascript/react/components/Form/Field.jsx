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
const Text_1 = __importDefault(require("./Controls/Text"));
const Checkbox_1 = __importDefault(require("./Controls/Checkbox"));
const Font_1 = __importDefault(require("~/components/Font"));
const classnames_1 = __importDefault(require("classnames"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const Flex_1 = __importDefault(require("~/components/Flex"));
const react_final_form_1 = require("react-final-form");
const react_final_form_arrays_1 = require("react-final-form-arrays");
const lodash_1 = require("lodash");
function Field(_a) {
    var { control } = _a, props = __rest(_a, ["control"]);
    const Control = control || Text_1.default;
    const type = Control.name === Checkbox_1.default.name ? "checkbox" : undefined;
    const Component = Control.isArray ? react_final_form_arrays_1.FieldArray : react_final_form_1.Field;
    return (<Component component={FieldRow} control={Control} type={type} {...props}/>);
}
exports.default = Field;
function FieldRow(_a) {
    var { className, label, control: Control, id, input, fields, description, hint, meta, maxLength, controlClassName } = _a, inputProps = __rest(_a, ["className", "label", "control", "id", "input", "fields", "description", "hint", "meta", "maxLength", "controlClassName"]);
    const name = input ? input.name : fields.name;
    const error = meta.error || meta.submitError;
    id = id || `form-${name}`;
    label =
        label === "undefined" || label === false
            ? false
            : label || (0, lodash_1.capitalize)(name);
    const control = fields ? (<Control fields={fields} id={id} className={controlClassName} {...inputProps}/>) : (<Control id={id} {...input} className={controlClassName} {...inputProps}/>);
    if (Control.isBoolean) {
        return (<div className={(0, classnames_1.default)(styles_module_scss_1.default.fieldBoolean, className)}>
        {control}
        {error && (<Font_1.default className={styles_module_scss_1.default.error}>{humanizeErrorMessage(error)}</Font_1.default>)}
        {label && (<label htmlFor={id} className={styles_module_scss_1.default.status}>
            {label}
          </label>)}
      </div>);
    }
    return (<div className={(0, classnames_1.default)(styles_module_scss_1.default.field, className)}>
      {(label || error) && (<div className={styles_module_scss_1.default.labelLine}>
          {label &&
                (description ? (<label htmlFor={id}>
                <Font_1.default block={true}>{label}</Font_1.default>
                {description}
              </label>) : (<Font_1.default component="label" htmlFor={id}>
                {label}
              </Font_1.default>))}
          {error && <Font_1.default>{humanizeErrorMessage(error)}</Font_1.default>}
        </div>)}
      <div>{control}</div>
      <Flex_1.default.Row justify="space-between" align="flex-end">
        {hint && <Font_1.default size="small">{hint}</Font_1.default>}
        <LengthMessage input={input} maxLength={maxLength}/>
      </Flex_1.default.Row>
    </div>);
}
const MESSAGE = {
    invalid: "is invalid",
    too_short: "is too short",
};
function humanizeErrorMessage(message) {
    return MESSAGE[message] || message;
}
function LengthMessage({ input, maxLength, }) {
    if (maxLength === undefined)
        return null;
    const currentLenght = input === null || input === void 0 ? void 0 : input.value.length;
    const color = currentLenght > maxLength ? "error" : "grey";
    const bold = currentLenght > maxLength;
    return (<Font_1.default className={styles_module_scss_1.default.lengthMessage} block={false} bold={bold}>
      {currentLenght}/{maxLength}
    </Font_1.default>);
}
