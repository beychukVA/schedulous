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
const Smile_1 = __importDefault(require("~/icons/Smile"));
const Email_1 = __importDefault(require("~/icons/Email"));
const Phone_1 = __importDefault(require("~/icons/Phone"));
const Watch_1 = __importDefault(require("~/icons/Watch"));
const WristWatch_1 = __importDefault(require("~/icons/WristWatch"));
const CalendarSmall_1 = __importDefault(require("~/icons/CalendarSmall"));
const Person_1 = __importDefault(require("~/icons/toggle/Person"));
function PreviewEvent({ eventDate, eventHour, eventMinutes, eventAbbreviation, eventDuration, eventStaff, eventGuest, eventPhoneNumber, eventEmail, onChangeIsEditEvent, }) {
    return (<>
      <div className={styles_module_scss_1.default.title}>
        <Font_1.default block={true} size="large" color="gray-900" weight="xBold">
          Details
        </Font_1.default>
      </div>
      <Item_1.default title="Staff" subtitle={eventStaff} icon={<Person_1.default width="16" height="16" color="#718096" strokeWidth="3"/>}/>
      <Item_1.default title="Guest" subtitle={eventGuest} icon={<Smile_1.default color="#718096"/>} mt="large"/>
      <Item_1.default title="Phone Number" subtitle={eventPhoneNumber} icon={<Phone_1.default color="#718096"/>} mt="large" mb="large"/>
      <Item_1.default title="Email Address" subtitle={eventEmail} icon={<Email_1.default color="#718096"/>} mt="large" mb="large"/>
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
