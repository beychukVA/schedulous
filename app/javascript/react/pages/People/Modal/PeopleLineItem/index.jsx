"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Avatar_1 = __importDefault(require("~/components/Avatar"));
const Check_1 = __importDefault(require("~/components/Check"));
const classnames_1 = __importDefault(require("classnames"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
function PeopleLineItem({ result, onSelect, currentResult, }) {
    const isSelected = currentResult && currentResult.id === result.id;
    const isNotSelected = !isSelected && currentResult;
    return (<div onClick={() => onSelect(result)} className={(0, classnames_1.default)(styles_module_scss_1.default.item, {
            [styles_module_scss_1.default.itemUnselected]: isNotSelected,
        })}>
      <div className={styles_module_scss_1.default.avatar}>
        <Avatar_1.default.UserLetteredAvatar name={result.title} size={36}/>
      </div>
      <div className={styles_module_scss_1.default.itemContent}>
        <div className={styles_module_scss_1.default.itemTitle}>{result.title}</div>
        {result.subtitle && (<div className={styles_module_scss_1.default.itemSubtitle}>{result.subtitle}</div>)}
      </div>
      <div className={styles_module_scss_1.default.itemCheck}>
        <Check_1.default selected={isSelected} size="Large"/>
      </div>
    </div>);
}
exports.default = PeopleLineItem;
