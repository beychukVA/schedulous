"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Chart_1 = __importDefault(require("~/icons/Chart"));
const People_1 = __importDefault(require("~/icons/People"));
const Calendar_1 = __importDefault(require("~/icons/Calendar"));
const Tasks_1 = __importDefault(require("~/icons/Tasks"));
const Message_1 = __importDefault(require("~/icons/Message"));
const Home_1 = __importDefault(require("~/icons/Home"));
const PowerUp_1 = __importDefault(require("~/icons/PowerUp"));
const Avatar_1 = __importDefault(require("~/components/Avatar"));
const Font_1 = __importDefault(require("~/components/Font"));
const reactjs_popup_1 = __importDefault(require("reactjs-popup"));
const react_router_dom_1 = require("react-router-dom");
const react_router_1 = require("react-router");
const paths_1 = __importDefault(require("~/paths"));
const logo_mark_svg_1 = __importDefault(require("images/brand/logo-mark.svg"));
const authentication_1 = require("~/api/authentication");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const classnames_1 = __importDefault(require("classnames"));
const useViewer_1 = __importDefault(require("~/hooks/useViewer"));
const LINKS = [
    { title: "Dashboard", url: paths_1.default.dashboard(), icon: Home_1.default },
    { title: "People", url: paths_1.default.people.index(), icon: People_1.default },
    { title: "Inbox", url: paths_1.default.inbox.index(), icon: Message_1.default },
    { title: "Calendar", url: paths_1.default.calendar.index(), icon: Calendar_1.default },
    { title: "Tasks", url: paths_1.default.tasks.index(), icon: Tasks_1.default },
    { title: "Reports", url: paths_1.default.reports.index(), icon: Chart_1.default },
];
const SETTINGS_LINK = [
    { title: "Power Ups", url: paths_1.default.powerUps.index(), icon: PowerUp_1.default },
    {
        title: "User",
        url: "javascript:;",
        icon: <AccountMenu />,
        rendered: true,
    },
];
function Nav() {
    return (<div className={styles_module_scss_1.default.navContainer}>
      <div className={styles_module_scss_1.default.navWrapper}>
        <div className={styles_module_scss_1.default.logo}>
          <img src={logo_mark_svg_1.default} width="39"/>
        </div>
        <div className={styles_module_scss_1.default.nav}>
          <div>
            {LINKS.map((link, i) => (<NavLink key={i} title={link.title} icon={link.icon} url={link.url} rendered={link.rendered}/>))}
          </div>
          <hr />
          <div>
            {SETTINGS_LINK.map((link, i) => (<NavLink key={i} title={link.title} icon={link.icon} url={link.url} rendered={link.rendered}/>))}
          </div>
        </div>
      </div>
    </div>);
}
exports.default = Nav;
function NavLink({ title, url, icon, rendered }) {
    const Icon = icon;
    const location = (0, react_router_1.useLocation)();
    const match = location.pathname.includes(url);
    const classes = (0, classnames_1.default)(styles_module_scss_1.default.link, {
        [styles_module_scss_1.default.linkSelected]: match,
    });
    return rendered ? (icon) : (<reactjs_popup_1.default key={title} on={["hover"]} position="right center" trigger={<react_router_dom_1.Link to={url} className={classes} title={title}>
          <Icon color={match ? "#194bfb" : "#1a202c"}/>
        </react_router_dom_1.Link>}>
      <Font_1.default size="medium" weight="xBold">
        {title}
      </Font_1.default>
    </reactjs_popup_1.default>);
}
function AccountMenu() {
    const viewer = (0, useViewer_1.default)();
    const handleLogout = () => {
        (0, authentication_1.logout)().then(() => {
            window.location.href = "/login";
        });
    };
    return (<reactjs_popup_1.default key="Account Menu" on={["hover"]} position="right bottom" className={styles_module_scss_1.default.popup} trigger={<div className={styles_module_scss_1.default.link}>
          <Avatar_1.default person={{ name: viewer.name }}/>
        </div>}>
      <div className={styles_module_scss_1.default.accountMenu}>
        <react_router_dom_1.Link to={paths_1.default.settings.index()} className={styles_module_scss_1.default.accountMenuLink}>
          <Font_1.default size="small" weight="bold">
            Settings
          </Font_1.default>
        </react_router_dom_1.Link>
        <react_router_dom_1.Link to={paths_1.default.settings.account.index()} className={styles_module_scss_1.default.accountMenuLink}>
          <Font_1.default size="small" weight="bold">
            Account
          </Font_1.default>
        </react_router_dom_1.Link>
        <hr />
        <div className={styles_module_scss_1.default.accountMenuLink} onClick={handleLogout}>
          <Font_1.default size="small" weight="bold">
            Logout
          </Font_1.default>
        </div>
      </div>
    </reactjs_popup_1.default>);
}
