"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Nav_1 = __importDefault(require("~/components/Nav"));
const SubNav_1 = __importDefault(require("~/components/SubNav"));
const Font_1 = __importDefault(require("~/components/Font"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const classnames_1 = __importDefault(require("classnames"));
function Admin({ title, children, subnav, cta, className, }) {
    const [collapsed, setCollapsed] = react_1.default.useState(false);
    return (<div className={styles_module_scss_1.default.admin}>
      <Nav_1.default />
      {subnav && <SubNav_1.default>{subnav}</SubNav_1.default>}
      <div className={(0, classnames_1.default)(styles_module_scss_1.default.content, {
            [styles_module_scss_1.default.contentCollapsed]: collapsed || !subnav,
        })}>
        <div className={styles_module_scss_1.default.headerContainer}>
          {subnav && (<button className={(0, classnames_1.default)(styles_module_scss_1.default.collapse, {
                [styles_module_scss_1.default.collapseLeft]: collapsed,
            })} onClickCapture={() => setCollapsed(!collapsed)}>
              Collapse
            </button>)}
          {title && (<div className={className || styles_module_scss_1.default.header}>
              <Font_1.default component="h2" size="h6" weight="xBold">
                {title}
              </Font_1.default>
              {cta && <>{cta}</>}
            </div>)}
        </div>
        <div id="scrollable" className={styles_module_scss_1.default.center}>
          {children}
        </div>
      </div>
    </div>);
}
exports.default = Admin;
