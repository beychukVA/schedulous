"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Container_1 = __importDefault(require("~/components/Container"));
const Font_1 = __importDefault(require("~/components/Font"));
const Setting_1 = __importDefault(require("./Setting"));
const Settings_1 = __importDefault(require("~/icons/Settings"));
const colors_1 = __importDefault(require("~/utils/colors"));
const Admin_1 = __importDefault(require("~/layouts/Admin"));
const paths_1 = __importDefault(require("~/paths"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
function Settings() {
    return (<Admin_1.default title="Settings">
      <Container_1.default.Small>
        <Font_1.default component="h3" block={true} size="xLarge" color="gray-900" weight="xBold" mb="medium">
          Business Settings
        </Font_1.default>

        <div className={styles_module_scss_1.default.settings}>
          <Setting_1.default title="Business Settings" subtitle="Manage your business name, address, and more" icon={<Settings_1.default color={colors_1.default.gray900}/>} link={paths_1.default.settings.business.index()}/>
          <Setting_1.default title="Payment Integration" subtitle="Connect your account to trusted payment providers" icon={<Settings_1.default color={colors_1.default.gray900}/>} link={paths_1.default.settings.payments.index()}/>
          <Setting_1.default title="Class Schedule" subtitle="Manage your class schedule and capacity" icon={<Settings_1.default color={colors_1.default.gray900}/>} link={paths_1.default.settings.schedule.index()}/>
          <Setting_1.default title="Plans" subtitle="Manage pricing plans and subscriptions" icon={<Settings_1.default color={colors_1.default.gray900}/>} link={paths_1.default.settings.plans.index()}/>
        </div>

        <Font_1.default component="h3" block={true} size="xLarge" color="gray-900" weight="xBold" mb="medium">
          Account Settings
        </Font_1.default>
        <div className={styles_module_scss_1.default.settings}>
          <Setting_1.default title="Account" subtitle="Manage your email and personal profile" icon={<Settings_1.default color={colors_1.default.gray900}/>} link={paths_1.default.settings.account.index()}/>
          <Setting_1.default title="Billing" subtitle="Manage your payment methods and subscriptions" icon={<Settings_1.default color={colors_1.default.gray900}/>} link={paths_1.default.settings.billing.index()}/>
          <Setting_1.default title="Team" subtitle="Manage your team members and permissions" icon={<Settings_1.default color={colors_1.default.gray900}/>} link={paths_1.default.settings.team.index()}/>
          <Setting_1.default title="Notifications" subtitle="Manage your notification preferences" icon={<Settings_1.default color={colors_1.default.gray900}/>} link={paths_1.default.settings.notifications.index()}/>
        </div>
      </Container_1.default.Small>
    </Admin_1.default>);
}
exports.default = Settings;
