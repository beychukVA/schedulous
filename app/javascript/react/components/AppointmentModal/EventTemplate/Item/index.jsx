"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Font_1 = __importDefault(require("~/components/Font"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
function Item({ title, subtitle, icon, mt, mb }) {
    return (<div className={`${styles_module_scss_1.default.container} ${mt && mt === "large" ? styles_module_scss_1.default.margin_top_large : ""} ${mb && mb === "large" ? styles_module_scss_1.default.margin_bottom_large : ""} `}>
      <div className={styles_module_scss_1.default.title}>
        <Font_1.default block={true} size="xSmall" color="gray-500" weight="semiBold" className={styles_module_scss_1.default.text}>
          {title}
        </Font_1.default>
      </div>
      <div className={styles_module_scss_1.default.content}>
        <div className={styles_module_scss_1.default.icon}>{icon}</div>
        <div className={styles_module_scss_1.default.subtitle}>
          <Font_1.default block={true} size="large" color="gray-900" weight="regular" className={styles_module_scss_1.default.text}>
            {subtitle}
          </Font_1.default>
        </div>
      </div>
    </div>);
}
exports.default = Item;
