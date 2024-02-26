"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Dashboard_1 = __importDefault(require("./pages/Dashboard"));
const Inbox_1 = __importDefault(require("./pages/Inbox"));
const Calendar_1 = __importDefault(require("./pages/Calendar"));
const Tasks_1 = __importDefault(require("./pages/Tasks"));
const Reports_1 = __importDefault(require("./pages/Reports"));
const Index_1 = __importDefault(require("./pages/People/Index"));
const Edit_1 = __importDefault(require("./pages/People/Edit"));
const Signup_1 = __importDefault(require("./pages/Signup"));
const Login_1 = __importDefault(require("./pages/Login"));
const Settings_1 = __importDefault(require("./pages/Settings"));
const Business_1 = __importDefault(require("./pages/Business"));
const Payments_1 = __importDefault(require("./pages/Payments"));
const Index_2 = __importDefault(require("./pages/Schedule/Index"));
const PowerUps_1 = __importDefault(require("./pages/PowerUps"));
const Plans_1 = __importDefault(require("./pages/Plans"));
const Team_1 = __importDefault(require("./pages/Team"));
const Billing_1 = __importDefault(require("./pages/Billing"));
const Notifications_1 = __importDefault(require("./pages/Notifications"));
const SettingsAccount_1 = __importDefault(require("./pages/SettingsAccount"));
const ForgotPassword_1 = __importDefault(require("./pages/ForgotPassword"));
const ResetPassword_1 = __importDefault(require("./pages/ResetPassword"));
require("reactjs-popup/dist/index.css");
require("~/styles/global.scss");
const init_1 = __importDefault(require("./utils/apollo/init"));
const react_apollo_1 = require("react-apollo");
const AccountConfirmation_1 = __importDefault(require("./pages/AccountConfirmation"));
function Router() {
    const apolloClient = (0, init_1.default)({});
    return (<react_apollo_1.ApolloProvider client={apolloClient}>
      <react_router_dom_1.BrowserRouter>
        <react_router_dom_1.Routes>
          {/* Authentication */}
          <react_router_dom_1.Route path="/login" element={<Login_1.default />}/>
          <react_router_dom_1.Route path="/forgot-password" element={<ForgotPassword_1.default />}/>
          <react_router_dom_1.Route path="/reset-password" element={<ResetPassword_1.default />}/>
          <react_router_dom_1.Route path="/account-confirmation" element={<AccountConfirmation_1.default />}/>
          <react_router_dom_1.Route path="/signup" element={<Signup_1.default />}/>
          {/* Admin */}
          <react_router_dom_1.Route path="/dashboard" element={<Dashboard_1.default />}/>
          <react_router_dom_1.Route path="/people" element={<Index_1.default />}/>
          <react_router_dom_1.Route path="/people/:id" element={<Edit_1.default />}/>
          <react_router_dom_1.Route path="/inbox" element={<Inbox_1.default />}/>
          <react_router_dom_1.Route path="/calendar" element={<Calendar_1.default />}/>
          <react_router_dom_1.Route path="/tasks" element={<Tasks_1.default />}/>
          <react_router_dom_1.Route path="/reports" element={<Reports_1.default />}/>
          {/* Power Ups */}
          <react_router_dom_1.Route path="/power-ups" element={<PowerUps_1.default />}/>
          {/* Settings */}
          <react_router_dom_1.Route path="/settings" element={<Settings_1.default />}/>
          <react_router_dom_1.Route path="/settings/account" element={<SettingsAccount_1.default />}/>
          <react_router_dom_1.Route path="/settings/business" element={<Business_1.default />}/>
          <react_router_dom_1.Route path="/settings/payments" element={<Payments_1.default />}/>
          <react_router_dom_1.Route path="/settings/schedule" element={<Index_2.default />}/>
          <react_router_dom_1.Route path="/settings/plans" element={<Plans_1.default />}/>
          <react_router_dom_1.Route path="/settings/team" element={<Team_1.default />}/>
          <react_router_dom_1.Route path="/settings/billing" element={<Billing_1.default />}/>
          <react_router_dom_1.Route path="/settings/notifications" element={<Notifications_1.default />}/>
        </react_router_dom_1.Routes>
      </react_router_dom_1.BrowserRouter>
    </react_apollo_1.ApolloProvider>);
}
exports.default = Router;
