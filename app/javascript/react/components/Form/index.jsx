"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormMethods = void 0;
const Buttons_1 = __importDefault(require("./Buttons"));
const Checkbox_1 = __importDefault(require("./Controls/Checkbox"));
const Email_1 = __importDefault(require("./Controls/Email"));
const Password_1 = __importDefault(require("./Controls/Password"));
const Field_1 = __importDefault(require("./Field"));
const Input_1 = __importDefault(require("./Input"));
const Mutation_1 = __importDefault(require("./Mutation"));
const Status_1 = __importDefault(require("./Status"));
const SubmitButton_1 = __importDefault(require("./SubmitButton"));
const Text_1 = __importDefault(require("./Controls/Text"));
const Textarea_1 = __importDefault(require("./Controls/Textarea"));
const Hidden_1 = __importDefault(require("./Controls/Hidden"));
const Number_1 = __importDefault(require("./Controls/Number"));
const Select_1 = __importDefault(require("./Controls/Select"));
const react_final_form_1 = require("react-final-form");
let methods;
// eslint-disable-next-line import/no-anonymous-default-export
exports.default = {
    Buttons: Buttons_1.default,
    Checkbox: Checkbox_1.default,
    Email: Email_1.default,
    Field: Field_1.default,
    Input: Input_1.default,
    Mutation: Mutation_1.default,
    Spy: react_final_form_1.FormSpy,
    Form: react_final_form_1.Form,
    Status: Status_1.default,
    SubmitButton: SubmitButton_1.default,
    Text: Text_1.default,
    Textarea: Textarea_1.default,
    Password: Password_1.default,
    Hidden: Hidden_1.default,
    Number: Number_1.default,
    Select: Select_1.default,
};
// TODO: Remove
const getFormMethods = () => {
    return methods;
};
exports.getFormMethods = getFormMethods;
