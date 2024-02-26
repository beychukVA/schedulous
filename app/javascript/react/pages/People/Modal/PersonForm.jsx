"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// import Error from "~/components/Form/Error";
function UserForm() {
    const [currentResult, setCurrentResult] = react_1.default.useState(null);
    const handleSelect = (newResult, field) => {
        field.onChange(newResult.id);
        setCurrentResult(newResult);
    };
    return (<>
      {/* <Autocomplete
          label="Select person"
          service={autocompletePeople}
          lineItem={PeopleLineItem}
          onSelect={(newResult) => handleSelect(newResult, field)}
        /> */}
      <input type="hidden" value={currentResult === null || currentResult === void 0 ? void 0 : currentResult.id}/>
    </>);
}
exports.default = UserForm;
