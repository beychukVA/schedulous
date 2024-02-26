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
const react_1 = __importStar(require("react"));
const Profile_1 = __importDefault(require("~/components/InboxMenu/Tabs/Content/ProfileContent/Profile/Profile"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const Check_1 = __importDefault(require("~/components/Check"));
const classnames_1 = __importDefault(require("classnames"));
function ContactCard({ name, email, favorite, onChecked, }) {
    const [isChecked, setChecked] = (0, react_1.useState)(false);
    const toggleChecked = () => {
        setChecked(!isChecked);
        onChecked(isChecked);
    };
    return (<div className={styles_module_scss_1.default.container}>
      <Profile_1.default classes={styles_module_scss_1.default.profile} name={name} email={email} favorite={favorite}/>
      <div className={(0, classnames_1.default)(styles_module_scss_1.default.icon, {
            Checked: isChecked,
        })} onClick={toggleChecked}>
        <Check_1.default selected={isChecked} color="green" removable={true}/>
      </div>
    </div>);
}
exports.default = ContactCard;
