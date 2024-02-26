"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Form_1 = __importDefault(require("~/components/Form"));
const date_fns_1 = require("date-fns");
function DayPicker({ mr, mb, label, className, defaultValue, year = "2022", month = 0, onChange, }) {
    const options = [];
    const days = (0, date_fns_1.getDaysInMonth)(new Date(Number(year), month));
    for (let i = 1; i <= days; i++) {
        let strDay = String(i);
        options.push({ value: strDay, label: strDay });
    }
    const handleChangeOption = (value) => {
        onChange(value);
    };
    return (<Form_1.default.Select mr={mr} mb={mb} label={label} className={className} default={defaultValue} options={options} onChangeOption={handleChangeOption}/>);
}
exports.default = DayPicker;
