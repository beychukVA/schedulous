"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const EventCard_1 = __importDefault(require("~/components/EventCard/EventCard"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const Plus_jsx_1 = __importDefault(require("~/icons/Plus.jsx"));
function Events({ events }) {
    return (<ul className={styles_module_scss_1.default.container}>
      {events &&
            events.map(({ id, title, subTitle, color }) => (<div>
            <EventCard_1.default key={id} title={title} subTitle={subTitle} color={color} icon={<Plus_jsx_1.default />} border={false} borderBottom={true}/>
          </div>))}
    </ul>);
}
exports.default = Events;
