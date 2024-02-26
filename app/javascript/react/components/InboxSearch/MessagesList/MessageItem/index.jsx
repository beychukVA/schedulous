"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const MessageCard_1 = __importDefault(require("./MessageCard"));
function MessageItem({ message, onChange }) {
    return (<li key={message.id}>
      {<MessageCard_1.default message={message} onChange={onChange}/>}
    </li>);
}
exports.default = MessageItem;
