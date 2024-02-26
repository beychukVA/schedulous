"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Font_1 = __importDefault(require("~/components/Font"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
function HistoryCard({ title, subTitle, status, color, }) {
    return (<div className={styles_module_scss_1.default.container}>
      <div style={{ backgroundColor: color }} className={styles_module_scss_1.default.indicator}></div>
      <div className={styles_module_scss_1.default.content_container}>
        <div className={styles_module_scss_1.default.title}>
          <Font_1.default block={false} size="small" weight="regular" color="black" mb="none" mt="none">
            {title}
          </Font_1.default>
        </div>
        <div className={styles_module_scss_1.default.sub_title}>
          <Font_1.default block={false} size="xSmall" weight="regular" color="gray" mb="none" mt="none">
            {subTitle}
          </Font_1.default>
        </div>
      </div>
      <div className={styles_module_scss_1.default.status}>
        <Font_1.default block={false} size="xSmall" weight="regular" color="gray" mb="none" mt="none">
          {status}
        </Font_1.default>
      </div>
    </div>);
}
exports.default = HistoryCard;
