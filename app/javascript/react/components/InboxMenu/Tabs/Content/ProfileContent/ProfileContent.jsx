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
const Events_1 = __importDefault(require("./Event/Events"));
const History_1 = __importDefault(require("./History/History"));
const Profile_1 = __importDefault(require("./Profile/Profile"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
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
];
const historys = [
    {
        id: 1,
        title: "Unlimited MMA",
        subTitle: "9/15/22 7:00am (1 hr)",
        status: "Expired",
        color: "#936dff",
    },
    {
        id: 2,
        title: "VIP Tour - Coach Sara",
        subTitle: "9/15/22 8:00am (30m)",
        status: "Attended",
        color: "#ff784b",
    },
    {
        id: 3,
        title: "Unlimited MMA",
        subTitle: "9/15/22 7:00am (1 hr)",
        status: "Attended",
        color: "#ffc837",
    },
    {
        id: 4,
        title: "Unlimited MMA",
        subTitle: "9/15/22 7:00am (1 hr)",
        status: "No Show",
        color: "#936dff",
    },
    {
        id: 5,
        title: "VIP Tour - Coach Sara",
        subTitle: "9/15/22 8:00am (30m)",
        status: "Expired",
        color: "#ff784b",
    },
    {
        id: 6,
        title: "Unlimited MMA",
        subTitle: "9/15/22 7:00am (1 hr)",
        status: "No Show",
        color: "#ffc837",
    },
    {
        id: 7,
        title: "Unlimited MMA",
        subTitle: "9/15/22 7:00am (1 hr)",
        status: "No Show",
        color: "#936dff",
    },
    {
        id: 8,
        title: "VIP Tour - Coach Sara",
        subTitle: "9/15/22 8:00am (30m)",
        status: "Attended",
        color: "#ff784b",
    },
    {
        id: 9,
        title: "Unlimited MMA",
        subTitle: "9/15/22 7:00am (1 hr)",
        status: "No Show",
        color: "#ffc837",
    },
    {
        id: 10,
        title: "Unlimited MMA",
        subTitle: "9/15/22 7:00am (1 hr)",
        status: "Attended",
        color: "#ffc837",
    },
];
const ProfileData = {
    name: "Jamie Smith",
    email: "jamiesmith@gmail.com",
};
function ProfileContent({ openModal }) {
    const [selectedEvent, setSelectedEvent] = (0, react_1.useState)(0);
    const handleEditEvent = (id) => {
        setSelectedEvent(id);
        const [event] = events.filter((event) => event.id === id);
        openModal({
            isOpen: true,
            data: {
                event: event,
                profile: ProfileData,
                history: historys,
            },
        });
    };
    return (<div className={styles_module_scss_1.default.container}>
      <Profile_1.default name={ProfileData.name} email={ProfileData.email} mb="large"/>
      <div className={styles_module_scss_1.default.content_container}>
        <Events_1.default events={events} onClick={handleEditEvent}/>
        <History_1.default historys={historys}/>
      </div>
    </div>);
}
exports.default = ProfileContent;
