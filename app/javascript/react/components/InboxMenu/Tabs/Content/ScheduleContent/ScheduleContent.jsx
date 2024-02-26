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
const Button_1 = __importDefault(require("~/components/Button"));
const DatePicker_1 = __importDefault(require("~/components/DatePicker"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const ShedulePopup_1 = __importDefault(require("./ShedulePopup"));
const Font_1 = __importDefault(require("~/components/Font"));
const Event_1 = __importDefault(require("./Event/"));
const events = [
    {
        id: 1,
        title: "Unlimited MMA",
        subTitle: "9/15/22 7:00am (1 hr)",
        color: "#936dff",
        favorite: true,
    },
    {
        id: 2,
        title: "VIP Tour - Coach Sara",
        subTitle: "9/15/22 8:00am (30m)",
        color: "#ff784b",
        favorite: false,
    },
    {
        id: 3,
        title: "Unlimited MMA",
        subTitle: "9/15/22 7:00am (1 hr)",
        color: "#ffc837",
        favorite: false,
    },
    {
        id: 4,
        title: "Unlimited MMA",
        subTitle: "9/15/22 7:00am (1 hr)",
        color: "#936dff",
        favorite: false,
    },
    {
        id: 5,
        title: "VIP Tour - Coach Sara",
        subTitle: "9/15/22 8:00am (30m)",
        color: "#ff784b",
        favorite: true,
    },
    {
        id: 6,
        title: "Unlimited MMA",
        subTitle: "9/15/22 7:00am (1 hr)",
        color: "#ffc837",
        favorite: false,
    },
    {
        id: 7,
        title: "Unlimited MMA",
        subTitle: "9/15/22 7:00am (1 hr)",
        color: "#936dff",
        favorite: false,
    },
    {
        id: 8,
        title: "VIP Tour - Coach Sara",
        subTitle: "9/15/22 8:00am (30m)",
        color: "#ff784b",
        favorite: false,
    },
    {
        id: 9,
        title: "Unlimited MMA",
        subTitle: "9/15/22 7:00am (1 hr)",
        color: "#ffc837",
        favorite: false,
    },
    {
        id: 10,
        title: "Unlimited MMA",
        subTitle: "9/15/22 7:00am (1 hr)",
        color: "#ffc837",
        favorite: false,
    },
];
function ScheduleContent() {
    const [data, setData] = (0, react_1.useState)(null);
    const onChange = (dayStr) => {
        setData(dayStr);
    };
    return (<div className={styles_module_scss_1.default.container}>
      <div className={styles_module_scss_1.default.calendar}>
        <DatePicker_1.default formatRegex="cccc, MMM dd" onChange={onChange}/>
      </div>
      <div className={styles_module_scss_1.default.schedules_container}>
        <div className={styles_module_scss_1.default.schedules_container_header}>
          <div>
            <Font_1.default block={false} size="xSmall" weight="xBold" color="gray" mb="none" mt="none" uppercase={true}>
              {data}
            </Font_1.default>
          </div>
          <div>
            <ShedulePopup_1.default classes={styles_module_scss_1.default.schedules_popup}/>
          </div>
        </div>
        <Event_1.default events={events}/>
      </div>
      <div className={styles_module_scss_1.default.button_container}>
        <Button_1.default className={styles_module_scss_1.default.button} title="Schedule Appointment" style="tertiary" onClick={() => ""}/>
      </div>
    </div>);
}
exports.default = ScheduleContent;
