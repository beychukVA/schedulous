"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Font_1 = __importDefault(require("~/components/Font"));
const Flex_1 = __importDefault(require("~/components/Flex"));
const Box_1 = __importDefault(require("~/components/Box"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
function MembershipSatus({ status }) {
    let color = "success";
    switch (status) {
        case "Member":
            color = "success";
            break;
        case "Churned":
            color = "warning";
            break;
        case "Lead":
            color = "purple";
            break;
        case "Expiring":
            color = "amber";
            break;
    }
    return (<Flex_1.default.Row responsive={false} justify="center">
      <Box_1.default backgroundColor={color} className={styles_module_scss_1.default.circle}/>
      <Font_1.default size="medium" weight="bold" color={color}>
        {status}
      </Font_1.default>
    </Flex_1.default.Row>);
}
exports.default = MembershipSatus;
