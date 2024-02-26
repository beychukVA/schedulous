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
const Form_1 = __importDefault(require("~/components/Form"));
const MessagesList_1 = __importDefault(require("./MessagesList"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const messagesArr = [
    {
        id: 1,
        avatar: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
        title: "Michael Landon",
        subTitle: "What time on Sunday?",
        favorite: false,
    },
    {
        id: 2,
        avatar: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
        title: "Michael Landon",
        subTitle: "What time on Sunday?",
        favorite: false,
    },
    {
        id: 3,
        avatar: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
        title: "Michael Landon",
        subTitle: "What time on Sunday?",
        favorite: true,
    },
    {
        id: 4,
        avatar: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
        title: "Michael Landon",
        subTitle: "What time on Sunday?",
        favorite: false,
    },
    {
        id: 5,
        avatar: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
        title: "Michael Landon",
        subTitle: "What time on Sunday?",
        favorite: false,
    },
    {
        id: 6,
        avatar: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
        title: "Michael Landon",
        subTitle: "What time on Sunday?",
        favorite: false,
    },
    {
        id: 7,
        avatar: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
        title: "Michael Landon",
        subTitle: "What time on Sunday?",
        favorite: false,
    },
    {
        id: 8,
        avatar: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
        title: "Michael Landon",
        subTitle: "What time on Sunday?",
        favorite: false,
    },
    {
        id: 9,
        avatar: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
        title: "Michael Landon",
        subTitle: "What time on Sunday?",
        favorite: false,
    },
    {
        id: 10,
        avatar: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
        title: "Michael Landon",
        subTitle: "What time on Sunday?",
        favorite: false,
    },
];
function Search() {
    const [messages, setMessages] = (0, react_1.useState)(messagesArr);
    const handleChangeFavoriteMessage = (id) => {
        setMessages((prev) => {
            return prev.map((message) => {
                if (message.id === id) {
                    return Object.assign(Object.assign({}, message), { favorite: !message.favorite });
                }
                return message;
            });
        });
    };
    return (<div className={styles_module_scss_1.default.container}>
      <Form_1.default.Text placeholder="Search inbox" name="search"/>
      <MessagesList_1.default messages={messages} onChange={handleChangeFavoriteMessage}/>
    </div>);
}
exports.default = Search;
