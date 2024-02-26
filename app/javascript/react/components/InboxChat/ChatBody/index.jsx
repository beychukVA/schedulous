"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ChatMessage_1 = __importDefault(require("./ChatMessage"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
function ChatBody({ messages }) {
    return (<div className={styles_module_scss_1.default.container}>
      {messages &&
            messages.map(({ sender, text }) => {
                const { avatar, name, time } = sender;
                return (<ChatMessage_1.default text={text} avatar={avatar} time={time} name={name}/>);
            })}
    </div>);
}
exports.default = ChatBody;
