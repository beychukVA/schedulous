"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const convertTimeFromMilitary_1 = __importDefault(require("~/utils/convertTimeFromMilitary"));
const classnames_1 = __importDefault(require("classnames"));
const Font_1 = __importDefault(require("~/components/Font"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const HOUR_HEIGHT = 60;
const DAY_START = 100;
const DAY_LENGTH = 24;
const HEIGHT = HOUR_HEIGHT * DAY_LENGTH;
const hours = Array.from({ length: DAY_LENGTH }, (_, i) => {
    const hour = DAY_START + i * 100;
    return (0, convertTimeFromMilitary_1.default)(hour);
});
function HourView({ offset }) {
    return (<td style={{ padding: 0, width: 70 }}>
      <div className={(0, classnames_1.default)(styles_module_scss_1.default.column, styles_module_scss_1.default.hourColumn)} style={{
            height: HEIGHT,
            width: 70,
            minWidth: 70,
            left: offset,
        }}>
        {hours.map((hour, i) => (<div key={i} className={styles_module_scss_1.default.hour} style={{ top: i * HOUR_HEIGHT }}>
            <Font_1.default size="small" color="gray-600" weight={i % 2 == 0 ? "bold" : "regular"}>
              {hour}
            </Font_1.default>
          </div>))}
      </div>
    </td>);
}
exports.default = HourView;
