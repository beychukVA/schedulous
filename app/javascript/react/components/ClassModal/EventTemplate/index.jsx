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
const CheckInTemplate_1 = __importDefault(require("./CheckInTemplate"));
const date_fns_1 = require("date-fns");
const PreviewEvent_1 = __importDefault(require("./PreviewEvent"));
const EditEvent_1 = __importDefault(require("./EditEvent"));
function EventTemplate({ data }) {
    const [isEditEvent, setIsEditEvent] = (0, react_1.useState)(false);
    const [eventDate, setEventDate] = (0, react_1.useState)((0, date_fns_1.format)(new Date(), "MMMM dd, yyyy"));
    const [eventHour, setEventHour] = (0, react_1.useState)("10");
    const [eventMinutes, setEventMinutes] = (0, react_1.useState)("30");
    const [eventAbbreviation, setEventAbbreviation] = (0, react_1.useState)("PM");
    const [eventDuration, setEventDuration] = (0, react_1.useState)("60");
    const [eventFacility, setEventFacility] = (0, react_1.useState)("Room 2");
    const [eventInstructor, setEventInstructor] = (0, react_1.useState)("Smith");
    const [eventClassSize, setEventClassSize] = (0, react_1.useState)("18");
    const { contacts } = data;
    return (<div className={styles_module_scss_1.default.container}>
      <div className={styles_module_scss_1.default.left_container}>
        {isEditEvent ? (<EditEvent_1.default eventDate={eventDate} eventHour={eventHour} eventMinutes={eventMinutes} eventAbbreviation={eventAbbreviation} eventDuration={eventDuration} eventFacility={eventFacility} eventInstructor={eventInstructor} eventClassSize={eventClassSize} onChangeIsEditEvent={() => setIsEditEvent(false)}/>) : (<PreviewEvent_1.default eventDate={eventDate} eventHour={eventHour} eventMinutes={eventMinutes} eventAbbreviation={eventAbbreviation} eventDuration={eventDuration} eventFacility={eventFacility} eventInstructor={eventInstructor} eventClassSize={eventClassSize} onChangeIsEditEvent={() => setIsEditEvent(true)}/>)}
      </div>
      <div className={styles_module_scss_1.default.right_container}>
        <CheckInTemplate_1.default contacts={contacts}/>
      </div>
    </div>);
}
exports.default = EventTemplate;
