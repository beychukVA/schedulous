"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const Favorites_1 = __importDefault(require("~/icons/Favorites"));
const Profile_1 = __importDefault(require("~/components/InboxMenu/Tabs/Content/ProfileContent/Profile/Profile"));
function MessageCard({ message, onChange }) {
    const { id, title, subTitle, favorite } = message;
    return (<>
      <div className={styles_module_scss_1.default.container}>
        <Profile_1.default name={title} email={subTitle}/>
        <div onClick={() => {
            onChange(id);
        }} className={`${styles_module_scss_1.default.favorite_icon} ${favorite ? styles_module_scss_1.default.icon_visible : styles_module_scss_1.default.icon_invisible}`}>
          <Favorites_1.default color={favorite ? "#936DFF" : "#96A3BE"}/>
        </div>
      </div>
    </>);
}
exports.default = MessageCard;
