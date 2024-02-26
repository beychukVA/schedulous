"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const Check_1 = __importDefault(require("~/components/Check"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
function CheckToggle({ items, onChange, selectedKey, padding, }) {
    return (<div className={styles_module_scss_1.default.toggle}>
      {items.map(({ title, icon, key }) => (<div key={key} className={(0, classnames_1.default)(styles_module_scss_1.default.item, {
                [styles_module_scss_1.default.itemSelected]: key === selectedKey,
                [styles_module_scss_1.default.padding_small]: padding === "small",
            })} onClick={() => onChange(key)}>
          <div className={styles_module_scss_1.default.icon}>{icon}</div>
          <div className={styles_module_scss_1.default.title}>{title}</div>
          <Check_1.default selected={key === selectedKey}/>
        </div>))}
    </div>);
}
exports.default = CheckToggle;
