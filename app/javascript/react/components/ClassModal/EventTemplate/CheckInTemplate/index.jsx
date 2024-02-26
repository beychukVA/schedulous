"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Font_1 = __importDefault(require("~/components/Font"));
const Form_1 = __importDefault(require("~/components/Form"));
const CheckedIn_1 = __importDefault(require("./CheckedIn"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
function CheckInTemplate({ contacts }) {
    return (<div className={styles_module_scss_1.default.container}>
      <div className={styles_module_scss_1.default.title_container}>
        <Font_1.default block={true} size="large" color="gray-900" weight="xBold">
          Attendees
        </Font_1.default>
        <Font_1.default block={true} size="medium" color="gray-600" weight="xBold">
          15/15
        </Font_1.default>
      </div>
      <div className={styles_module_scss_1.default.input_container}>
        <Form_1.default.Text placeholder="Manually Add to Class" name="search"/>
      </div>
      <div className={styles_module_scss_1.default.check_in_container}>
        <CheckedIn_1.default contacts={contacts} scroll={true}/>
      </div>
    </div>);
}
exports.default = CheckInTemplate;
