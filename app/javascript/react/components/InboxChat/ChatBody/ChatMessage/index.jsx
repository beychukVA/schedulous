"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Font_1 = __importDefault(require("~/components/Font"));
const Profile_1 = __importDefault(require("~/components/InboxMenu/Tabs/Content/ProfileContent/Profile/Profile"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
function ChatMessage({ avatar, name, time, text }) {
    const AccountName = "Jamie Smith";
    return (<div className={`${styles_module_scss_1.default.container} ${name === AccountName ? styles_module_scss_1.default.left : styles_module_scss_1.default.right}`}>
      <Font_1.default block={true} size="small" color="black" weight="regular" className={styles_module_scss_1.default.text}>
        {text}
      </Font_1.default>
      <div className={styles_module_scss_1.default.sender_container}>
        <Profile_1.default name={name} email={time} flex={true} size={20} nameStyle={styles_module_scss_1.default.name} emailStyle={styles_module_scss_1.default.email}/>
      </div>
    </div>);
}
exports.default = ChatMessage;
