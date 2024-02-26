"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const Font_1 = __importDefault(require("~/components/Font"));
const Expand_1 = __importDefault(require("~/icons/Expand"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
function ChatHeader({ title, collapsed, onChangeCollapsed, }) {
    return (<div className={styles_module_scss_1.default.container}>
      <Font_1.default block={true} size="xLarge" uppercase={false} weight="xBold" color="black">
        {title}
      </Font_1.default>
      <div className={styles_module_scss_1.default.status_container}>
        {/* <MembershipSatus/> */}
        <div className={styles_module_scss_1.default.status}></div>
        <Font_1.default block={true} size="small" uppercase={false} weight="xBold" color="purple">
          Lead
        </Font_1.default>
        <button onClick={() => onChangeCollapsed()} className={(0, classnames_1.default)(styles_module_scss_1.default.expand_icon, {
            [styles_module_scss_1.default.hide]: !collapsed,
        })}>
          <Expand_1.default />
        </button>
      </div>
    </div>);
}
exports.default = ChatHeader;
