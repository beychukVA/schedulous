"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const classnames_1 = __importDefault(require("classnames"));
const Font_1 = __importDefault(require("~/components/Font"));
const Collapse_1 = __importDefault(require("~/icons/Collapse"));
function Tabs({ className, selectedId, tabs, onClick, collapsed, onChangeCollapsed, }) {
    return (<div className={(0, classnames_1.default)(styles_module_scss_1.default.tabs, className)}>
      {tabs &&
            tabs.map((tab) => {
                return (<div key={tab.id} className={(0, classnames_1.default)(styles_module_scss_1.default.tab, {
                        [styles_module_scss_1.default.tab__selected]: tab.id === selectedId,
                    })} onClick={() => onClick(tab.id)}>
              <div className={(0, classnames_1.default)({
                        tab_label: styles_module_scss_1.default.tab_label,
                        tab_label__selected: tab.id === selectedId,
                    })}>
                <Font_1.default block={false} size="small" weight={tab.id === selectedId ? "xBold" : "regular"} color="black" mb="none" mt="none">
                  {tab.label}
                </Font_1.default>
              </div>
            </div>);
            })}
      <button onClick={() => onChangeCollapsed()} className={(0, classnames_1.default)(styles_module_scss_1.default.collapse_icon, {
            [styles_module_scss_1.default.hide]: collapsed,
        })}>
        <Collapse_1.default />
      </button>
    </div>);
}
exports.default = Tabs;
