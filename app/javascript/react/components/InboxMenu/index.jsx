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
const classnames_1 = __importDefault(require("classnames"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const Tabs_1 = __importDefault(require("./Tabs"));
const ProfileContent_1 = __importDefault(require("./Tabs/Content/ProfileContent/ProfileContent"));
const TemplatesContent_1 = __importDefault(require("./Tabs/Content/TemplatesContent/TemplatesContent"));
const ScheduleContent_1 = __importDefault(require("./Tabs/Content/ScheduleContent/ScheduleContent"));
const tabs = [
    {
        id: "1",
        label: "Profile",
    },
    {
        id: "2",
        label: "Templates",
    },
    {
        id: "3",
        label: "Schedule",
    },
];
const templates = [
    {
        id: 1,
        message: "Hey [Name], this is [Staff] from [Company]. I wanted to quickly introduce myself. 👋",
        category: "Welcome",
    },
    {
        id: 2,
        message: "Great! You are confirmed for [Class Name] with [Coach] at [Date] [Time]. 👊 ",
        category: "Class Confirmation",
    },
    {
        id: 3,
        message: "Great! [Staff] will meet you in [Location] at [Date] [Time]. 🙌",
        category: "Appointment Confirmation",
    },
    {
        id: 4,
        message: "Hey [Name], this is [Staff] from [Company]. I wanted to quickly introduce myself. 👋",
        category: "Welcome",
    },
    {
        id: 5,
        message: "Hey [Name], this is [Staff] from [Company]. I wanted to quickly introduce myself. 👋",
        category: "Welcome",
    },
    {
        id: 6,
        message: "Hey [Name], this is [Staff] from [Company]. I wanted to quickly introduce myself. 👋",
        category: "Welcome",
    },
    {
        id: 7,
        message: "Hey [Name], this is [Staff] from [Company]. I wanted to quickly introduce myself. 👋",
        category: "Welcome",
    },
    {
        id: 8,
        message: "Hey [Name], this is [Staff] from [Company]. I wanted to quickly introduce myself. 👋",
        category: "Welcome",
    },
    {
        id: 9,
        message: "Hey [Name], this is [Staff] from [Company]. I wanted to quickly introduce myself. 👋",
        category: "Welcome",
    },
    {
        id: 10,
        message: "Hey [Name], this is [Staff] from [Company]. I wanted to quickly introduce myself. 👋",
        category: "Welcome",
    },
];
function InboxMenu({ collapsed, onChangeCollapsed, openModal, }) {
    const [selectedId, setSelectedId] = (0, react_1.useState)(tabs[0].id);
    const handleTabClick = (id) => setSelectedId(id);
    return (<div className={(0, classnames_1.default)(styles_module_scss_1.default.container, {
            [styles_module_scss_1.default.collapsed]: collapsed,
        })}>
      <Tabs_1.default tabs={tabs} selectedId={selectedId} onClick={handleTabClick} collapsed={collapsed} onChangeCollapsed={onChangeCollapsed}/>
      <div>
        {selectedId === tabs[0].id && (<div>
            <ProfileContent_1.default openModal={openModal}/>
          </div>)}
        {selectedId === tabs[1].id && (<div>
            <TemplatesContent_1.default templates={templates}/>
          </div>)}
        {selectedId === tabs[2].id && (<div>
            <ScheduleContent_1.default />
          </div>)}
      </div>
    </div>);
}
exports.default = InboxMenu;
