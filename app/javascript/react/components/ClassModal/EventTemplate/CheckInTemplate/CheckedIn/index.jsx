"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importStar(require("react"));
const Font_1 = __importDefault(require("~/components/Font"));
const ContactCard_1 = __importDefault(require("../ContactCard"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
function CheckedIn({ contacts, scroll = false }) {
    const [checkedCount, setCheckedCount] = (0, react_1.useState)(0);
    const handleChecked = (isChecked) => {
        if (isChecked) {
            setCheckedCount(checkedCount - 1);
        }
        else {
            setCheckedCount(checkedCount + 1);
        }
    };
    return (<div className={styles_module_scss_1.default.container}>
      <div className={styles_module_scss_1.default.title_container}>
        <Font_1.default block={false} size="xSmall" weight="xBold" color="gray" mb="none" mt="none">
          CHECKED-IN
        </Font_1.default>
        <Font_1.default block={false} size="xSmall" weight="xBold" color="gray" mb="none" mt="none">
          {checkedCount}/15
        </Font_1.default>
      </div>
      <hr />
      <ul className={(0, classnames_1.default)(styles_module_scss_1.default.content_container, {
            [styles_module_scss_1.default.scroll]: scroll,
        })}>
        {contacts &&
            contacts.map(({ id, name, email, favorite }) => (<ContactCard_1.default key={id} name={name} email={email} favorite={favorite} onChecked={handleChecked}/>))}
      </ul>
    </div>);
}
exports.default = CheckedIn;
