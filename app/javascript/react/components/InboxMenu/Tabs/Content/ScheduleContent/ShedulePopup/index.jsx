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
const reactjs_popup_1 = __importDefault(require("reactjs-popup"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const DownArrow_1 = __importDefault(require("~/icons/DownArrow"));
const classnames_1 = __importDefault(require("classnames"));
const react_router_dom_1 = require("react-router-dom");
const Font_1 = __importDefault(require("~/components/Font"));
const CheckIcon_1 = __importDefault(require("~/icons/toggle/CheckIcon"));
const popupItems = [
    {
        id: 0,
        title: "All",
    },
    {
        id: 1,
        title: "Appointments",
    },
    {
        id: 2,
        title: "Classes",
    },
];
function SchedulePopup({ classes }) {
    const [popupStatus, setPopupStatus] = (0, react_1.useState)(false);
    const [selectedItem, setSelectedItem] = (0, react_1.useState)(0);
    const togglePopup = () => setPopupStatus(!popupStatus);
    const handleSelectedItem = (id) => setSelectedItem(id);
    return (<reactjs_popup_1.default key="Schedules Select" on={["click"]} position="bottom right" className={classes} onOpen={() => togglePopup()} onClose={() => togglePopup()} trigger={<div className={styles_module_scss_1.default.link}>
          <Font_1.default size="xSmall" weight="xBold" color="gray" mb="none" mt="none" uppercase={true}>
            {popupItems[selectedItem].title}
          </Font_1.default>
          <div className={(0, classnames_1.default)(styles_module_scss_1.default.arrow, {
                [styles_module_scss_1.default.arrow_up]: popupStatus,
                [styles_module_scss_1.default.arrow_down]: !popupStatus,
            })}>
            <DownArrow_1.default color="#194BFB"/>
          </div>
        </div>}>
      <div className={styles_module_scss_1.default.popupMenu}>
        {popupItems.map(({ id, title }) => (<react_router_dom_1.Link onClick={() => {
                handleSelectedItem(id);
            }} key={id} to="" className={styles_module_scss_1.default.popupMenuLink}>
            <Font_1.default className={(0, classnames_1.default)("", {
                [styles_module_scss_1.default.selected]: selectedItem === id,
            })} size="xSmall" weight="regular">
              {title}
            </Font_1.default>
            <div className={styles_module_scss_1.default.icon}>
              <CheckIcon_1.default color={selectedItem === id ? "#194BFB" : ""} width="16" height="16"/>
            </div>
          </react_router_dom_1.Link>))}
      </div>
    </reactjs_popup_1.default>);
}
exports.default = SchedulePopup;
