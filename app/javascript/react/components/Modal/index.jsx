"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_modal_1 = __importDefault(require("react-modal"));
const Close_1 = __importDefault(require("~/icons/Close"));
const Favorites_1 = __importDefault(require("~/icons/Favorites"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const classnames_1 = __importDefault(require("classnames"));
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        overflow: "hidden",
        transform: "translate(-50%, -50%)",
        minWidth: "550px",
        maxHeight: "760px",
        borderRadius: "5px",
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
};
function Modal({ title, subtitle, favorite, isOpen, onClose, children, toggle, }) {
    return (<react_modal_1.default shouldCloseOnEsc={false} shouldCloseOnOverlayClick={false} isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <div className={(0, classnames_1.default)(styles_module_scss_1.default.header, {
            [styles_module_scss_1.default.headerWithToggle]: toggle,
        })}>
        <div className={styles_module_scss_1.default.headerContent}>
          <div className={styles_module_scss_1.default.favorite_container}>
            {favorite && (<div className={styles_module_scss_1.default.favorite_icon}>
                <Favorites_1.default color={favorite ? "#936DFF" : "#ffffff"}/>
              </div>)}
            <div className={styles_module_scss_1.default.title}>{title}</div>
          </div>

          {subtitle && <div className={styles_module_scss_1.default.subtitle}>{subtitle}</div>}
          {toggle}
        </div>
        <div className={styles_module_scss_1.default.headerClose} onClick={onClose}>
          <Close_1.default />
        </div>
      </div>
      {children}
    </react_modal_1.default>);
}
exports.default = Modal;
