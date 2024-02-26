"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Form_1 = __importDefault(require("~/components/Form"));
const date_fns_1 = require("date-fns");
function MonthPicker({ mr, mb, label, className, defaultValue, onChangeIndex, onChangeValue, }) {
    const options = [];
    const year = (0, date_fns_1.getYear)(new Date());
    for (let i = 0; i < 12; i++) {
        let month = (0, date_fns_1.format)((0, date_fns_1.addMonths)(year, i), "MMMM");
        options.push({
            value: month,
            label: month,
        });
    }
    const getOptionId = (month) => {
        return options.findIndex((option) => option.value === month);
    };
    const handleChangeOption = (value) => {
        onChangeIndex(getOptionId(value));
        onChangeValue(value);
    };
    return (<Form_1.default.Select mr={mr} mb={mb} label={label} className={className} default={defaultValue} options={options} onChangeOption={handleChangeOption}/>);
}
exports.default = MonthPicker;
