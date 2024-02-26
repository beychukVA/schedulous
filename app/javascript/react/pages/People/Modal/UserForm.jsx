"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Form_1 = __importDefault(require("~/components/Form"));
function UserForm() {
    return (<>
      <Form_1.default.Input label="Email" name="user.email"/>
      <Form_1.default.Input label="Phone" name="user.phone"/>
      <Form_1.default.Input name="user.skipPassword" label={false} defaultValue="1" control={Form_1.default.Hidden}/>
    </>);
}
exports.default = UserForm;
