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
const date_fns_1 = require("date-fns");
require("./styles.scss");
const Font_1 = __importDefault(require("../Font"));
const Prev_1 = __importDefault(require("~/icons/Prev"));
const Next_1 = __importDefault(require("~/icons/Next"));
function DatePicker({ onChange, formatRegex, lastDay = false, }) {
    const [currentMonth, setCurrentMonth] = (0, react_1.useState)(new Date());
    const [currentWeek, setCurrentWeek] = (0, react_1.useState)((0, date_fns_1.getWeek)(currentMonth));
    const [selectedDate, setSelectedDate] = (0, react_1.useState)(new Date());
    const [currentDay, setCurrentDay] = (0, react_1.useState)(new Date());
    (0, react_1.useEffect)(() => onDateClickHandle(selectedDate, formatRegex), []);
    const changeMonthHandle = (btnType) => {
        if (btnType === "prev") {
            setCurrentMonth((0, date_fns_1.subMonths)(currentMonth, 1));
        }
        if (btnType === "next") {
            setCurrentMonth((0, date_fns_1.addMonths)(currentMonth, 1));
        }
    };
    const changeWeekHandle = (btnType) => {
        if (btnType === "prev") {
            setCurrentMonth((0, date_fns_1.subWeeks)(currentMonth, 1));
            setCurrentWeek((0, date_fns_1.getWeek)((0, date_fns_1.subWeeks)(currentMonth, 1)));
        }
        if (btnType === "next") {
            setCurrentMonth((0, date_fns_1.addWeeks)(currentMonth, 1));
            setCurrentWeek((0, date_fns_1.getWeek)((0, date_fns_1.addWeeks)(currentMonth, 1)));
        }
    };
    const onDateClickHandle = (day, formatDay) => {
        const dayStr = (0, date_fns_1.format)(day, formatDay);
        setSelectedDate(day);
        onChange(dayStr);
    };
    const isLastDay = (day, formatDay) => {
        const dayMs = Date.parse((0, date_fns_1.format)(day, formatDay));
        const currDayMs = Date.parse((0, date_fns_1.format)(currentDay, formatDay));
        if (dayMs < currDayMs) {
            return true;
        }
        return false;
    };
    const isCurrentDay = (day, formatDay) => {
        const currDayMs = Date.parse((0, date_fns_1.format)(currentDay, formatDay));
        const dayMs = Date.parse((0, date_fns_1.format)(day, formatDay));
        if (currDayMs === dayMs) {
            return true;
        }
        return false;
    };
    const renderHeader = () => {
        const dateFormat = "MMMM";
        return (<div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={() => changeWeekHandle("prev")}>
            <Prev_1.default color="#194BFB"/>
          </div>
        </div>
        <div className="col col-center">
          <Font_1.default block={true} size="xSmall" weight="xBold" color="black" mb="none" mt="none" uppercase={true}>
            week of {(0, date_fns_1.format)(currentMonth, dateFormat)} {currentWeek}
          </Font_1.default>
        </div>
        <div className="col col-end" onClick={() => changeWeekHandle("next")}>
          <div className="icon">
            <Next_1.default color="#194BFB"/>
          </div>
        </div>
      </div>);
    };
    const renderDays = () => {
        const dateFormat = "EEEEE";
        const days = [];
        let startDate = (0, date_fns_1.startOfWeek)(currentMonth, { weekStartsOn: 1 });
        for (let i = 0; i < 7; i++) {
            days.push(<div className="col col-center" key={i}>
          <Font_1.default block={false} size="xSmall" weight="xBold" color="black" mb="none" mt="none" uppercase={true}>
            {(0, date_fns_1.format)((0, date_fns_1.addDays)(startDate, i), dateFormat)}
          </Font_1.default>
        </div>);
        }
        return <div className="days row">{days}</div>;
    };
    const renderCells = () => {
        const startDate = (0, date_fns_1.startOfWeek)(currentMonth, { weekStartsOn: 1 });
        const endDate = (0, date_fns_1.lastDayOfWeek)(currentMonth, { weekStartsOn: 1 });
        const dateFormat = "d";
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = (0, date_fns_1.format)(day, dateFormat);
                const cloneDay = day;
                days.push(<div className={`cell ${(0, date_fns_1.isSameDay)(day, selectedDate) ? "selected" : ""} ${isCurrentDay(day, formatRegex) ? "today" : ""} ${lastDay && isLastDay(day, formatRegex) ? "last_day" : ""}`} key={day.toString()} onClick={() => {
                        onDateClickHandle(cloneDay, formatRegex);
                    }}>
            <Font_1.default className="number" block={false} size="xSmall" weight="medium" color="black" mb="none" mt="none" uppercase={true}>
              {formattedDate}
            </Font_1.default>
          </div>);
                day = (0, date_fns_1.addDays)(day, 1);
            }
            rows.push(<div className="row" key={day.toString()}>
          {days}
        </div>);
            days = [];
        }
        return <div className="body">{rows}</div>;
    };
    return (<div className="calendar">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>);
}
exports.default = DatePicker;
