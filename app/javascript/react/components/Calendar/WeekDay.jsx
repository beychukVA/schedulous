"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const Font_1 = __importDefault(require("~/components/Font"));
const eventPosition_1 = require("~/utils/eventPosition");
const classnames_1 = __importDefault(require("classnames"));
const APPOINTMENT_WIDTH = 160;
const HOUR_HEIGHT = 60;
const DAY_LENGTH = 24;
const DAY_START = 100;
const HEIGHT = HOUR_HEIGHT * DAY_LENGTH;
function WeekDay({ events, offset, date }) {
    const overlappingEventsCount = (0, eventPosition_1.overlappingEvents)(events);
    const eventsWithLeftIndex = (0, eventPosition_1.addLeftIndexAndSortByEventLength)(events, overlappingEventsCount);
    return (<td style={{ padding: 0, border: "none" }}>
      <div className={styles_module_scss_1.default.column} style={{
            height: HEIGHT,
            width: overlappingEventsCount > 0
                ? APPOINTMENT_WIDTH * overlappingEventsCount + 20
                : "100%",
        }}>
        <div className={styles_module_scss_1.default.header} style={{ top: offset }}>
          <Font_1.default block={true} size="small" weight="bold" color="gray-600" mb="small">
            {date.format("ddd").toUpperCase()}
          </Font_1.default>
          <Font_1.default block={true} size="small" weight="bold" color="primary">
            {date.format("D")}
          </Font_1.default>
        </div>
        <div>&nbsp;</div>
        {eventsWithLeftIndex.map((event, index) => (<div key={index} className={styles_module_scss_1.default.event} style={{
                width: overlappingEventsCount > 0
                    ? APPOINTMENT_WIDTH
                    : "calc(100% - 20px)",
                top: timeToTop(event.militaryStartTime),
                left: APPOINTMENT_WIDTH * event.leftIndex,
                height: timeToHeight(event.militaryStartTime, event.militaryEndTime),
            }}>
            <div className={(0, classnames_1.default)(styles_module_scss_1.default.eventInner, styles_module_scss_1.default[`eventInner${event.type}`])}>
              <div className={styles_module_scss_1.default.eventTitle}>{event.name}</div>
              {event.capacity && (<EventCapacity capacity={event.capacity} reserved={event.reserved}/>)}
            </div>
          </div>))}
      </div>
    </td>);
}
exports.default = WeekDay;
function EventCapacity({ capacity, reserved }) {
    return (<div className={(0, classnames_1.default)(styles_module_scss_1.default.capacity, {
            [styles_module_scss_1.default.capacityFull]: capacity - reserved < 4,
        })}>
      {reserved}/{capacity} ({capacity - reserved} remaining)
    </div>);
}
const timeToTop = (time) => {
    const hours = Math.floor(time / 100);
    const minutes = time % 100;
    return (hours - DAY_START / 100) * HOUR_HEIGHT + (minutes / 60) * HOUR_HEIGHT;
};
const timeToHeight = (start, end) => {
    const startHours = Math.floor(start / 100);
    const startMinutes = start % 100;
    const endHours = Math.floor(end / 100);
    const endMinutes = end % 100;
    return ((endHours - startHours) * HOUR_HEIGHT +
        (endMinutes - startMinutes) * (HOUR_HEIGHT / 60));
};
