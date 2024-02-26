"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SettingsLayout_1 = __importDefault(require("~/layouts/SettingsLayout"));
const BreadCrumbs_1 = __importDefault(require("~/components/BreadCrumbs"));
function Billing() {
    const breadCrumbData = [
        {
            title: "Billing",
            url: "",
        },
    ];
    return (<SettingsLayout_1.default title={<BreadCrumbs_1.default data={breadCrumbData}></BreadCrumbs_1.default>} full={true}>
      Billing
    </SettingsLayout_1.default>);
}
exports.default = Billing;
