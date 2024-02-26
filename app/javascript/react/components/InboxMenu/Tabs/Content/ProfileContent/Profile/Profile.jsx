"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Avatar_1 = __importDefault(require("~/components/Avatar"));
const Font_1 = __importDefault(require("~/components/Font"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const Favorites_1 = __importDefault(require("~/icons/Favorites"));
const classnames_1 = __importDefault(require("classnames"));
function Profile({ name, email, favorite = false, classes, mb, nameStyle, emailStyle, size = 45, flex = false, }) {
    return (<div className={(0, classnames_1.default)(`${styles_module_scss_1.default.container} ${classes}`, {
            [styles_module_scss_1.default.marginBottomLarge]: mb === "large",
        })}>
      <div className={styles_module_scss_1.default.avatar}>
        <Avatar_1.default person={{ name }} size={size}/>
      </div>
      <div className={`${styles_module_scss_1.default.data_container} ${flex && styles_module_scss_1.default.paddingLeftSmall}`}>
        <div className={flex && styles_module_scss_1.default.flexContainer}>
          <div className={styles_module_scss_1.default.name_container}>
            <Font_1.default block={false} size="large" weight="xBold" color="black" mb="none" mt="none" className={nameStyle}>
              {name}
            </Font_1.default>
            {favorite && (<div className={styles_module_scss_1.default.icon}>
                <Favorites_1.default color={favorite ? "#936DFF" : "#ffffff"}/>
              </div>)}
          </div>
          <Font_1.default block={false} size="small" weight="regular" color="black" mb="none" mt="none" className={emailStyle}>
            {email}
          </Font_1.default>
        </div>
      </div>
    </div>);
}
exports.default = Profile;
