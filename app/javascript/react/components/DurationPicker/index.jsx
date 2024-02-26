"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Form_1 = __importDefault(require("~/components/Form"));
function DurationPicker({ className, mr, mb, label, defaultValue, onChange, }) {
    const options = [];
    for (let i = 1; i <= 120; i++) {
        let strDuration = i < 10 ? `0${i}` : i;
        options.push({
            value: strDuration.toString(),
            label: strDuration.toString(),
        });
    }
    const handleChangeOption = (value) => {
        onChange(value);
    };
    return (<Form_1.default.Select className={className} mr={mr} mb={mb} label={label} default={defaultValue} options={options} onChangeOption={handleChangeOption}/>);
}
exports.default = DurationPicker;
