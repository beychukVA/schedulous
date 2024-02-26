"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Font_1 = __importDefault(require("~/components/Font"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
function TemplateCard({ message, category }) {
    return (<div className={styles_module_scss_1.default.container}>
      <div className={styles_module_scss_1.default.message}>
        <Font_1.default block={false} size="small" weight="regular" color="black" mb="none" mt="none">
          {message}
        </Font_1.default>
      </div>
      <div className={styles_module_scss_1.default.category}>
        <Font_1.default block={false} size="small" weight="regular" color="black" mb="none" mt="none">
          {category}
        </Font_1.default>
      </div>
    </div>);
}
exports.default = TemplateCard;
