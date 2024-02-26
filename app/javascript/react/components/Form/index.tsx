import Buttons from "./Buttons";
import Checkbox from "./Controls/Checkbox";
import Email from "./Controls/Email";
import Password from "./Controls/Password";
import Field from "./Field";
import Input from "./Input";
import Mutation from "./Mutation";
import Status from "./Status";
import SubmitButton from "./SubmitButton";
import Text from "./Controls/Text";
import Textarea from "./Controls/Textarea";
import Hidden from "./Controls/Hidden";
import Number from "./Controls/Number";
import Select from "./Controls/Select";
import { FormSpy, Form } from "react-final-form";

let methods;
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Buttons,
  Checkbox,
  Email,
  Field,
  Input,
  Mutation,
  Spy: FormSpy,
  Form,
  Status,
  SubmitButton,
  Text,
  Textarea,
  Password,
  Hidden,
  Number,
  Select,
};

// TODO: Remove
export const getFormMethods = () => {
  return methods;
};
