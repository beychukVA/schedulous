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
const react_final_form_1 = require("react-final-form");
const react_final_form_arrays_1 = require("react-final-form-arrays");
const lodash_1 = require("lodash");
const Text_1 = __importDefault(require("./Controls/Text"));
const Checkbox_1 = __importDefault(require("./Controls/Checkbox"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
function Field(_a) {
    var { control, allowNull = true, parse } = _a, props = __rest(_a, ["control", "allowNull", "parse"]);
    const Control = control || Text_1.default;
    const type = Control.name === Checkbox_1.default.name ? "checkbox" : undefined;
    const Component = Control.isArray ? react_final_form_arrays_1.FieldArray : react_final_form_1.Field;
    return (<Component component={FieldRow} control={Control} type={type} parse={(value) => {
            let result = value;
            if (parse) {
                result = parse(result);
            }
            else {
                if (result === "" && allowNull) {
                    result = null;
                }
                ;
            }
            return result;
        }} {...props}/>);
}
exports.default = Field;
function FieldRow(_a) {
    var { className, label, control: Control, id, input, fields, description, hint, meta, maxLength, controlClassName, path } = _a, inputProps = __rest(_a, ["className", "label", "control", "id", "input", "fields", "description", "hint", "meta", "maxLength", "controlClassName", "path"]);
    const name = input ? input.name : fields.name;
    const { submitErrors } = (0, react_final_form_1.useFormState)();
    const error = meta.error || meta.submitError || path && submitErrors && submitErrors[path];
    const [currentValue, setCurrentValue] = React.useState(input.value);
    const [active, setActive] = React.useState(false);
    const noMargin = inputProps.noMargin;
    id = id || `form-${name}`;
    label =
        label === "undefined" || label === false
            ? false
            : label || (0, lodash_1.capitalize)(name);
    const control = fields ? (<Control fields={fields} id={id} className={controlClassName} {...inputProps}/>) : (<Control id={id} {...input} className={controlClassName} onFocus={() => setActive(true)} label={label} onBlur={() => setActive(false)} onChange={(e) => {
            setCurrentValue(e.target.value);
            input.onChange(e);
        }} {...inputProps}/>);
    if (Control.isBoolean) {
        return (<div className={(0, classnames_1.default)(styles_module_scss_1.default.fieldBoolean, className)}>
        {control}
        {error && (<div className={styles_module_scss_1.default.error}>{humanizeErrorMessage(error)}</div>)}
        {/* {label && (
              <label htmlFor={id} className={styles.status}>
                {label}
              </label>
            )} */}
      </div>);
    }
    return (<div className={(0, classnames_1.default)(styles_module_scss_1.default.input, {
            [styles_module_scss_1.default.inputFilled]: currentValue && !active && !error,
            [styles_module_scss_1.default.inputError]: error,
            [styles_module_scss_1.default.inputNomargin]: noMargin,
            [styles_module_scss_1.default.inputFocused]: active && !error,
        })}>
      {(label || error) && (<div className={styles_module_scss_1.default.label}>
          {label &&
                (description ? (<label htmlFor={id}>
                <div>{label}</div>
                {description}
              </label>) : (<label htmlFor={id}>{label}</label>))}
        </div>)}
      <div>{control}</div>
      {error && (<div className={styles_module_scss_1.default.error}>{humanizeErrorMessage(error)}</div>)}
      <div>{hint && <div>{hint}</div>}</div>
    </div>);
}
const MESSAGE = {
    invalid: "is invalid",
    too_short: "is too short",
};
function humanizeErrorMessage(message) {
    return MESSAGE[message] || message;
}
