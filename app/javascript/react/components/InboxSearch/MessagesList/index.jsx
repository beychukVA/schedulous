"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const MessageItem_1 = __importDefault(require("./MessageItem"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
function MessageList({ messages, onChange }) {
    return (<>
      <ul className={styles_module_scss_1.default.list}>
        {messages &&
            messages.map((message) => (<MessageItem_1.default key={message.id} message={message} onChange={onChange}/>))}
      </ul>
    </>);
}
exports.default = MessageList;
