"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Form_1 = __importDefault(require("~/components/Form"));
const Button_1 = __importDefault(require("~/components/Button"));
const CheckToggle_1 = __importDefault(require("~/components/CheckToggle"));
const Person_1 = __importDefault(require("~/icons/toggle/Person"));
const People_1 = __importDefault(require("~/icons/toggle/People"));
const UserForm_1 = __importDefault(require("./UserForm"));
const PersonForm_1 = __importDefault(require("./PersonForm"));
const Mutation_1 = __importDefault(require("./Mutation"));
const TOGGLE_ITEMS = [
    { title: "New User", icon: <Person_1.default />, key: "user" },
    { title: "Add to Family", icon: <People_1.default />, key: "person" },
];
function PeopleForm({ handleSubmit }) {
    const [currentToggle, setCurrentToggle] = react_1.default.useState("user");
    return (<>
      <Form_1.default.Mutation data-track="create-person" mutation={Mutation_1.default} onSubmit={handleSubmit}>
        <Form_1.default.Input label="Name" name="name"/>

        <CheckToggle_1.default items={TOGGLE_ITEMS} selectedKey={currentToggle} onChange={setCurrentToggle}/>

        {currentToggle === "user" && <UserForm_1.default />}
        {currentToggle === "person" && <PersonForm_1.default />}
        <hr />
        <Button_1.default title="Create Person" type="submit"/>
      </Form_1.default.Mutation>
    </>);
}
exports.default = PeopleForm;
