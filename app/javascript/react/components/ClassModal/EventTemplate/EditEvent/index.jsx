"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const Font_1 = __importDefault(require("~/components/Font"));
const Button_1 = __importDefault(require("~/components/Button"));
const Form_1 = __importDefault(require("~/components/Form"));
const MonthPicker_1 = __importDefault(require("~/components/MonthPicker"));
const DayPicker_1 = __importDefault(require("~/components/DayPicker"));
const YearPicker_1 = __importDefault(require("~/components/YearPicker"));
const HourPicker_1 = __importDefault(require("~/components/HourPicker"));
const MinutePicker_1 = __importDefault(require("~/components/MinutePicker"));
const AbbreviationPicker_1 = __importDefault(require("~/components/AbbreviationPicker"));
const DurationPicker_1 = __importDefault(require("~/components/DurationPicker"));
const date_fns_1 = require("date-fns");
const facilityOptions = [
    { value: "Room 1", label: "Room 1" },
    { value: "Room 2", label: "Room 2" },
    { value: "Room 3", label: "Room 3" },
];
const instructorOptions = [
    { value: "John", label: "John" },
    { value: "Smith", label: "Smith" },
    { value: "John Smith", label: "John Smith" },
];
function EditEvent({ eventDate, eventHour, eventMinutes, eventAbbreviation, eventDuration, eventFacility, eventInstructor, eventClassSize, onChangeIsEditEvent, }) {
    const [month, setMonth] = (0, react_1.useState)((0, date_fns_1.format)(new Date(eventDate), "MMMM"));
    const [monthIndex, setMonthIndex] = (0, react_1.useState)(0);
    const [day, setDay] = (0, react_1.useState)((0, date_fns_1.format)(new Date(eventDate), "dd"));
    const [year, setYear] = (0, react_1.useState)((0, date_fns_1.format)(new Date(eventDate), "yyyy"));
    const [hour, setHour] = (0, react_1.useState)(eventHour);
    const [minute, setMinute] = (0, react_1.useState)(eventMinutes);
    const [abbreviation, setAbbreviation] = (0, react_1.useState)(eventAbbreviation);
    const [duration, setDuration] = (0, react_1.useState)(eventDuration);
    const [facility, setFacility] = (0, react_1.useState)(eventFacility);
    const [instructor, setInstructor] = (0, react_1.useState)(eventInstructor);
    const [classSize, setClassSize] = (0, react_1.useState)(eventClassSize);
    return (<>
      <div className={styles_module_scss_1.default.title}>
        <Font_1.default block={true} size="large" color="gray-900" weight="xBold">
          Details
        </Font_1.default>
      </div>
      <Form_1.default.Select className={styles_module_scss_1.default.select} mb={true} label="Facility" default={facility} options={facilityOptions} onChangeOption={setFacility}/>
      <Form_1.default.Select className={styles_module_scss_1.default.select} mb={true} label="Instructor" default={instructor} options={instructorOptions} onChangeOption={setInstructor}/>
      <Form_1.default.Number value={classSize} aria-label="Class Size" onChange={(event) => setClassSize(event.target.value)}/>
      <div className={styles_module_scss_1.default.title}>
        <Font_1.default block={true} size="large" color="gray-900" weight="xBold">
          Date & Time
        </Font_1.default>
      </div>
      <div className={styles_module_scss_1.default.popup_container}>
        <div className={styles_module_scss_1.default.date_container}>
          <MonthPicker_1.default mb={true} mr={true} label="Month" className={styles_module_scss_1.default.select} defaultValue={month} onChangeValue={setMonth} onChangeIndex={setMonthIndex}/>
          <DayPicker_1.default mb={true} mr={true} label="Day" className={styles_module_scss_1.default.select} defaultValue={day} year={year} month={monthIndex} onChange={setDay}/>
          <YearPicker_1.default mb={true} label="Year" className={styles_module_scss_1.default.select} defaultValue={year} onChange={setYear}/>
        </div>
      </div>
      <div className={styles_module_scss_1.default.popup_container}>
        <div className={styles_module_scss_1.default.time_container}>
          <HourPicker_1.default mb={true} mr={true} label="Hour" className={styles_module_scss_1.default.select} defaultValue={hour} onChange={setHour}/>
          <MinutePicker_1.default mb={true} mr={true} label="Minute" className={styles_module_scss_1.default.select} defaultValue={minute} onChange={setMinute}/>
          <AbbreviationPicker_1.default mb={true} label="AM/PM" className={styles_module_scss_1.default.select} defaultValue={abbreviation} onChange={setAbbreviation}/>
        </div>
      </div>
      <div className={styles_module_scss_1.default.popup_container}>
        <DurationPicker_1.default mb={true} label="Class Duration" defaultValue={duration} onChange={setDuration}/>
      </div>
      <div className={styles_module_scss_1.default.left_buttons_container}>
        <Button_1.default className={styles_module_scss_1.default.button} title="Update Event" style="primary" onClick={() => ""} disabled={!classSize}/>
        <Button_1.default className={`${styles_module_scss_1.default.button} ${styles_module_scss_1.default.red}`} title="Cancel Changes" style="secondary" onClick={() => onChangeIsEditEvent()}/>
      </div>
    </>);
}
exports.default = EditEvent;
