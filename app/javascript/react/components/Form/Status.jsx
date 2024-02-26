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
const React = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const react_final_form_1 = require("react-final-form");
function Status({ successText, submittingText }) {
    return (<react_final_form_1.FormSpy>
      {(form) => (<span className={(0, classnames_1.default)(styles_module_scss_1.default.status, {
                [styles_module_scss_1.default.errorStatus]: form.submitFailed,
            })}>
          {form.submitSucceeded &&
                successText !== false &&
                `👍 ${successText || "Updated!"}`}
          {form.submitting && `💾 ${submittingText || "Saving"}…`}
          {form.submitFailed && "🙀 Oh-oh! There has been an error…"}
        </span>)}
    </react_final_form_1.FormSpy>);
}
exports.default = Status;
Status.defaultProps = {
    successText: false,
};
