"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Form_1 = __importDefault(require("~/components/Form"));
const date_fns_1 = require("date-fns");
function YearPicker({ mr, mb, label, className, defaultValue, onChange, }) {
    const options = [];
    for (let i = 0; i <= 10; i++) {
        let strYear = (0, date_fns_1.format)((0, date_fns_1.addYears)(new Date(), i), "yyyy");
        options.push({ value: strYear, label: strYear });
    }
    const handleChangeOption = (value) => {
        onChange(value);
    };
    return (<Form_1.default.Select mr={mr} mb={mb} label={label} className={className} default={defaultValue} options={options} onChangeOption={handleChangeOption}/>);
}
exports.default = YearPicker;
