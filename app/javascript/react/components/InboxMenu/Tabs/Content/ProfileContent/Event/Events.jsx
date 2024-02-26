"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const EventCard_1 = __importDefault(require("~/components/EventCard/EventCard"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const Edit_1 = __importDefault(require("~/icons/Edit"));
function Events({ events, onClick }) {
    return (<ul className={styles_module_scss_1.default.container}>
      {events &&
            events.map(({ id, title, subTitle, color }) => (<EventCard_1.default key={id} id={id} title={title} subTitle={subTitle} color={color} icon={<Edit_1.default />} onClick={onClick}/>))}
    </ul>);
}
exports.default = Events;
