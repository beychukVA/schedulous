"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const Font_1 = __importDefault(require("~/components/Font"));
const Item_1 = __importDefault(require("../Item"));
const Button_1 = __importDefault(require("~/components/Button"));
const Location_1 = __importDefault(require("~/icons/Location"));
const People_1 = __importDefault(require("~/icons/People"));
const Watch_1 = __importDefault(require("~/icons/Watch"));
const WristWatch_1 = __importDefault(require("~/icons/WristWatch"));
const CalendarSmall_1 = __importDefault(require("~/icons/CalendarSmall"));
const Person_1 = __importDefault(require("~/icons/toggle/Person"));
function PreviewEvent({ eventDate, eventHour, eventMinutes, eventAbbreviation, eventDuration, eventFacility, eventInstructor, eventClassSize, onChangeIsEditEvent, }) {
    return (<>
      <div className={styles_module_scss_1.default.title}>
        <Font_1.default block={true} size="large" color="gray-900" weight="xBold">
          Details
        </Font_1.default>
      </div>
      <Item_1.default title="Facility" subtitle={eventFacility} icon={<Location_1.default />}/>
      <Item_1.default title="Instructor" subtitle={eventInstructor} icon={<Person_1.default width="16" height="16" color="#718096" strokeWidth="3"/>} mt="large"/>
      <Item_1.default title="Class Size" subtitle={eventClassSize} icon={<People_1.default width="16" height="16" strokeWidth="3"/>} mt="large" mb="large"/>
      <div className={styles_module_scss_1.default.title}>
        <Font_1.default block={true} size="large" color="gray-900" weight="xBold">
          Date & Time
        </Font_1.default>
      </div>
      <div className={styles_module_scss_1.default.popup_container}>
        <Item_1.default title="Date" subtitle={eventDate} icon={<CalendarSmall_1.default />}/>
      </div>
      <div className={styles_module_scss_1.default.popup_container}>
        <Item_1.default title="Start Time" subtitle={`${eventHour}:${eventMinutes}${eventAbbreviation}`} icon={<Watch_1.default />} mt="large"/>
      </div>
      <div className={styles_module_scss_1.default.popup_container}>
        <Item_1.default title="Duration" subtitle={`${eventDuration}m`} icon={<WristWatch_1.default />} mt="large"/>
      </div>
      <div className={styles_module_scss_1.default.left_buttons_container}>
        <Button_1.default className={styles_module_scss_1.default.button} title="Edit Event" style="primary" onClick={() => onChangeIsEditEvent()}/>
        <Button_1.default className={`${styles_module_scss_1.default.button} ${styles_module_scss_1.default.red}`} title="Cancel Event" style="secondary" onClick={() => ""}/>
      </div>
    </>);
}
exports.default = PreviewEvent;
