"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("~/components/Button"));
const Form_1 = __importDefault(require("~/components/Form"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const TemplateCard_1 = __importDefault(require("./TemplateCard/TemplateCard"));
function TemplatesContent({ templates }) {
    return (<div className={styles_module_scss_1.default.container}>
      <Form_1.default.Text placeholder="Search  templates" name="message" className={styles_module_scss_1.default.input}/>
      <ul className={styles_module_scss_1.default.templates_container}>
        {templates &&
            templates.map(({ id, message, category }) => (<TemplateCard_1.default key={id} message={message} category={category}/>))}
      </ul>
      <div className={styles_module_scss_1.default.button_container}>
        <Button_1.default className={styles_module_scss_1.default.button} title="Create New Template" style="tertiary" onClick={() => ""}/>
      </div>
    </div>);
}
exports.default = TemplatesContent;
