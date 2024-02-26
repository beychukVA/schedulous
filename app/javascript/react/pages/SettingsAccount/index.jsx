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
const Container_1 = __importDefault(require("~/components/Container"));
const Font_1 = __importDefault(require("~/components/Font"));
const SettingsLayout_1 = __importDefault(require("~/layouts/SettingsLayout"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const context_1 = require("../../state/account/context");
function Settings() {
    const { state: stateAccount, dispatch: accountDispatch } = (0, react_1.useContext)(context_1.AccountContext);
    return (<SettingsLayout_1.default title="Settings">
      <Container_1.default.Small>
        <Font_1.default component="h3" block={true} size="xLarge" color="gray-900" weight="xBold" mb="medium">
          Account Settings
        </Font_1.default>
        {<div className={styles_module_scss_1.default.settings}>
            <div className={styles_module_scss_1.default.setting}>
              <div className={styles_module_scss_1.default.settingInner}>
                <div className={styles_module_scss_1.default.settingContent}>
                  <p>
                    <Font_1.default className={styles_module_scss_1.default.settingText} component="h3" size="large" color="gray-900" weight="xBold">
                      Name:
                    </Font_1.default>
                    <Font_1.default component="p" size="large" color="gray-900">
                      {stateAccount.account && stateAccount.account.name}
                    </Font_1.default>
                  </p>
                  <p>
                    <Font_1.default className={styles_module_scss_1.default.settingText} component="h3" size="large" color="gray-900" weight="xBold">
                      Phone:
                    </Font_1.default>
                    <Font_1.default component="p" size="large" color="gray-900">
                      {stateAccount.account && stateAccount.account.phone}
                    </Font_1.default>
                  </p>
                  <p>
                    <Font_1.default className={styles_module_scss_1.default.settingText} component="h3" size="large" color="gray-900" weight="xBold">
                      Address:
                    </Font_1.default>
                    <Font_1.default component="p" size="large" color="gray-900">
                      {stateAccount.account && stateAccount.account.address}
                    </Font_1.default>
                  </p>
                  <p>
                    <Font_1.default className={styles_module_scss_1.default.settingText} component="h3" size="large" color="gray-900" weight="xBold">
                      City:
                    </Font_1.default>
                    <Font_1.default component="p" size="large" color="gray-900">
                      {stateAccount.account && stateAccount.account.city}
                    </Font_1.default>
                  </p>
                  <p>
                    <Font_1.default className={styles_module_scss_1.default.settingText} component="h3" size="large" color="gray-900" weight="xBold">
                      State:
                    </Font_1.default>
                    <Font_1.default component="p" size="large" color="gray-900">
                      {stateAccount.account && stateAccount.account.state}
                    </Font_1.default>
                  </p>
                  <p>
                    <Font_1.default className={styles_module_scss_1.default.settingText} component="h3" size="large" color="gray-900" weight="xBold">
                      Total members:
                    </Font_1.default>
                    <Font_1.default component="p" size="large" color="gray-900">
                      {stateAccount.account &&
                stateAccount.account.total_members}
                    </Font_1.default>
                  </p>
                  <p>
                    <Font_1.default className={styles_module_scss_1.default.settingText} component="h3" size="large" color="gray-900" weight="xBold">
                      Year in business:
                    </Font_1.default>
                    <Font_1.default component="p" size="large" color="gray-900">
                      {stateAccount.account &&
                stateAccount.account.years_in_business}
                    </Font_1.default>
                  </p>
                </div>
              </div>
            </div>
          </div>}
      </Container_1.default.Small>
    </SettingsLayout_1.default>);
}
exports.default = Settings;
