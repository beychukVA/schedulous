"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const classnames_1 = __importDefault(require("classnames"));
function Toggle({ tabs, currentTab, onChange }) {
    return (<div className={styles_module_scss_1.default.toggle}>
      {tabs.map((tab) => (<div key={tab} className={(0, classnames_1.default)(styles_module_scss_1.default.toggleItem, {
                [styles_module_scss_1.default.toggleItemSelected]: currentTab == tab,
            })} onClick={() => onChange(tab)}>
          {tab}
        </div>))}
    </div>);
}
exports.default = Toggle;
