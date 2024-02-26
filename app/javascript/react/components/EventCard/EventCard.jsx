"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const Font_1 = __importDefault(require("~/components/Font"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
function EventCard({ id, classes = "", title, subTitle, color, icon, border = true, borderBottom = false, onClick, }) {
    return (<div className={(0, classnames_1.default)(`${styles_module_scss_1.default.container} ${classes}`, {
            [styles_module_scss_1.default.borders]: border,
            [styles_module_scss_1.default.border_bottom]: borderBottom,
        })}>
      <div style={{ borderLeft: `3px solid ${color}` }} className={styles_module_scss_1.default.event_detail}>
        <div className={styles_module_scss_1.default.title}>
          <Font_1.default block={false} size="small" weight="xBold" color="gray-900" mb="none" mt="none">
            {title}
          </Font_1.default>
        </div>
        <div className={styles_module_scss_1.default.sub_title}>
          <Font_1.default block={false} size="small" weight="semiBold" color="gray" mb="none" mt="none">
            {subTitle}
          </Font_1.default>
        </div>
      </div>
      <div onClick={() => {
            onClick(id);
        }} className={styles_module_scss_1.default.icon}>
        {icon}
      </div>
    </div>);
}
exports.default = EventCard;
