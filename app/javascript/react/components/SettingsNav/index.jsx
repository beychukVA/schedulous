"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Font_1 = __importDefault(require("~/components/Font"));
const SubNavLink_1 = __importDefault(require("~/components/SubNav/SubNavLink"));
const paths_1 = __importDefault(require("~/paths"));
function SettingsNav() {
    return (<>
      <Header title="Business Settings"/>
      <SubNavLink_1.default title="Business Settings" to={paths_1.default.settings.business.index()}/>
      <SubNavLink_1.default title="Payment Integration" to={paths_1.default.settings.payments.index()}/>
      <SubNavLink_1.default title="Class Schedule" to={paths_1.default.settings.schedule.index()}/>
      <SubNavLink_1.default title="Plans" to={paths_1.default.settings.plans.index()}/>
      <SubNavLink_1.default title="Team" to={paths_1.default.settings.team.index()}/>
      <Header title="Account Settings"/>
      <SubNavLink_1.default title="Account" to={paths_1.default.settings.account.index()}/>
      <SubNavLink_1.default title="Billing" to={paths_1.default.settings.billing.index()}/>
      <SubNavLink_1.default title="Notifications" to={paths_1.default.settings.notifications.index()}/>
    </>);
}
exports.default = SettingsNav;
function Header({ title }) {
    return (<>
      <Font_1.default block={true} size="xSmall" uppercase={true} weight="xBold" color="gray-600" mb="small" mt="medium">
        {title}
      </Font_1.default>
    </>);
}
