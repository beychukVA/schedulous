"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Form_1 = __importDefault(require("~/components/Form"));
function HourPicker({ mr, mb, label, className, defaultValue, onChange, }) {
    const options = [];
    for (let i = 1; i <= 12; i++) {
        let strHour = i < 10 ? `0${i}` : i;
        options.push({ value: strHour.toString(), label: strHour.toString() });
    }
    const handleChangeOption = (value) => {
        onChange(value);
    };
    return (<Form_1.default.Select mr={mr} mb={mb} label={label} className={className} default={defaultValue} options={options} onChangeOption={handleChangeOption}/>);
}
exports.default = HourPicker;
