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
const Form_1 = __importDefault(require("~/components/Form"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const Button_1 = __importDefault(require("~/components/Button"));
const reactjs_popup_1 = __importDefault(require("reactjs-popup"));
const react_router_dom_1 = require("react-router-dom");
const classnames_1 = __importDefault(require("classnames"));
const react_router_1 = require("react-router");
const Font_1 = __importDefault(require("~/components/Font"));
const ResizePopup_1 = __importDefault(require("./Popup/ResizePopup"));
const SmilePopup_1 = __importDefault(require("./Popup/SmilePopup"));
const CONTROLS_LINK = [
    { title: "Resize", url: "", icon: <ResizePopup_1.default />, rendered: true },
    {
        title: "Smile",
        url: "",
        icon: <SmilePopup_1.default />,
        rendered: true,
    },
];
function ChatFooter() {
    const [message, setMessage] = (0, react_1.useState)("");
    const handleInputChange = (event) => {
        const { value } = event.target;
        setMessage(value);
    };
    return (<div className={styles_module_scss_1.default.container}>
      <Form_1.default.Textarea placeholder="Type message ..." name="message" className={styles_module_scss_1.default.input} onChange={handleInputChange}/>
      <div className={styles_module_scss_1.default.controls}>
        <div className={styles_module_scss_1.default.icon_container}>
          {CONTROLS_LINK.map((link, i) => (<NavLink key={i} title={link.title} icon={link.icon} url={link.url} rendered={link.rendered}/>))}
        </div>
        <Button_1.default className={styles_module_scss_1.default.button} title="Send" disabled={!message} style="primary" onClick={() => ""}/>
      </div>
    </div>);
}
exports.default = ChatFooter;
function NavLink({ title, url, icon, rendered }) {
    const Icon = icon;
    const location = (0, react_router_1.useLocation)();
    const match = location.pathname.includes(url);
    const classes = (0, classnames_1.default)(styles_module_scss_1.default.link, {
        [styles_module_scss_1.default.linkSelected]: match,
    });
    return rendered ? (icon) : (<reactjs_popup_1.default key={title} on={["click"]} position="top center" trigger={<react_router_dom_1.Link to={url} className={classes} title={title}>
          <Icon color={match ? "#718096" : "#194bfb"}/>
        </react_router_dom_1.Link>}>
      <Font_1.default size="medium" weight="xBold">
        {title}
      </Font_1.default>
    </reactjs_popup_1.default>);
}
