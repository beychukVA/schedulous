"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const ChatBody_1 = __importDefault(require("./ChatBody"));
const ChatFooter_1 = __importDefault(require("./ChatFooter"));
const ChatHeader_1 = __importDefault(require("./ChatHeader/ChatHeader"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const chatMessages = [
    {
        sender: {
            avatar: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
            name: "BOT",
            time: "8:45pm",
        },
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
        sender: {
            avatar: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
            name: "Jamie Smith",
            time: "8:45pm",
        },
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
        sender: {
            avatar: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
            name: "BOT",
            time: "8:45pm",
        },
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
        sender: {
            avatar: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
            name: "Jamie Smith",
            time: "8:45pm",
        },
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
        sender: {
            avatar: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
            name: "Jamie Smith",
            time: "8:45pm",
        },
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
        sender: {
            avatar: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
            name: "BOT",
            time: "8:45pm",
        },
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
        sender: {
            avatar: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
            name: "Jamie Smith",
            time: "8:45pm",
        },
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
        sender: {
            avatar: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
            name: "BOT",
            time: "8:45pm",
        },
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
        sender: {
            avatar: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
            name: "Jamie Smith",
            time: "8:45pm",
        },
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
        sender: {
            avatar: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
            name: "BOT",
            time: "8:45pm",
        },
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
];
function Chat({ collapsed, onChangeCollapsed }) {
    return (<div className={(0, classnames_1.default)(styles_module_scss_1.default.container, {
            [styles_module_scss_1.default.collapsed]: collapsed,
        })}>
      <ChatHeader_1.default title="Jamie Smith" collapsed={collapsed} onChangeCollapsed={onChangeCollapsed}/>
      <ChatBody_1.default messages={chatMessages}/>
      <ChatFooter_1.default />
    </div>);
}
exports.default = Chat;
