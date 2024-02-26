"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("~/components/Button"));
const Profile_1 = __importDefault(require("~/components/InboxMenu/Tabs/Content/ProfileContent/Profile/Profile"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const History_1 = __importDefault(require("~/components/InboxMenu/Tabs/Content/ProfileContent/History/History"));
function ProfileTemplate({ profile, history }) {
    return (<>
      <Profile_1.default name={profile.name} email={profile.email} mb="large"/>
      <div className={styles_module_scss_1.default.features}>
        <span>Upcoming - Is future appointment</span>
        <span>Past - Is past</span>
        <span>Attended - Admin checks them in</span>
        <span>No Show - Admin clicks mark no show</span>
      </div>
      <div className={styles_module_scss_1.default.right_buttons_container}>
        <Button_1.default className={`${styles_module_scss_1.default.button} ${styles_module_scss_1.default.right_button}`} title="Check-In" style="primary"/>
        <Button_1.default className={`${styles_module_scss_1.default.button} ${styles_module_scss_1.default.right_button}`} title="Mark as No Show" style="secondary" onClick={() => ""}/>
      </div>
      <div className={styles_module_scss_1.default.history_container}>
        <History_1.default historys={history} scroll={true}/>
      </div>
    </>);
}
exports.default = ProfileTemplate;
