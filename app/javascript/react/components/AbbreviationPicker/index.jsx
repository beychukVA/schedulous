"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Form_1 = __importDefault(require("~/components/Form"));
function AbbreviationPicker({ mr, mb, label, className, defaultValue, onChange, }) {
    const options = [
        {
            value: "AM",
            label: "AM",
        },
        {
            value: "PM",
            label: "PM",
        },
    ];
    const handleChangeOption = (value) => {
        onChange(value);
    };
    return (<Form_1.default.Select mr={mr} mb={mb} label={label} className={className} default={defaultValue} options={options} onChangeOption={handleChangeOption}/>);
}
exports.default = AbbreviationPicker;
