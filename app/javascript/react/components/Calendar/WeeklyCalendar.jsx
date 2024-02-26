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
const WeekDay_1 = __importDefault(require("./WeekDay"));
const HourColumn_1 = __importDefault(require("./HourColumn"));
const useScrollPosition_1 = __importDefault(require("~/hooks/useScrollPosition"));
const moment_1 = __importDefault(require("moment"));
const classnames_1 = __importDefault(require("classnames"));
const Button_1 = __importDefault(require("~/components/Button"));
const LeftChevron_1 = __importDefault(require("~/icons/LeftChevron"));
const Query_1 = __importDefault(require("./Query"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const createPage_1 = __importDefault(require("~/utils/createPage"));
const WeeklyCalendar = ({ data }) => {
    const { programInstances } = data;
    const { y } = (0, useScrollPosition_1.default)("scrollable");
    const { x } = (0, useScrollPosition_1.default)("table-overflow");
    const [startDate, setStartDate] = (0, react_1.useState)((0, moment_1.default)().clone().startOf("week"));
    return (<>
      <div className={styles_module_scss_1.default.calendarHeader}>
        <div className={styles_module_scss_1.default.weekSelector}>
          <div className={styles_module_scss_1.default.chevron} onClick={() => setStartDate(startDate.clone().subtract(7, "days"))}>
            <LeftChevron_1.default />
          </div>
          <div className={styles_module_scss_1.default.weekSelectorDate}>
            {startDate.format("MMM D")}
          </div>
          <div className={(0, classnames_1.default)(styles_module_scss_1.default.chevron, styles_module_scss_1.default.chevronRight)} onClick={() => setStartDate(startDate.clone().add(7, "days"))}>
            <LeftChevron_1.default />
          </div>
        </div>
        <div className={styles_module_scss_1.default.calendarHeaderButtons}>
          <Button_1.default title="Add to Schedule" size="small"/>
        </div>
      </div>
      <div id="table-overflow" className={styles_module_scss_1.default.tableOverflow}>
        <table className={styles_module_scss_1.default.table}>
          <tbody>
            <tr>
              <HourColumn_1.default offset={x}/>
              {Array.from({ length: 7 }).map((_, i) => (<WeekDay_1.default date={startDate.clone().add(i, "days")} offset={y >= 75 ? y - 75 : 0} key={i} events={programInstances.filter((event) => {
                if ((0, moment_1.default)(event.datetime).isSame(startDate.clone().add(i, "days"), "day"))
                    return event;
            })}/>))}
            </tr>
          </tbody>
        </table>
      </div>
    </>);
};
exports.default = (0, createPage_1.default)({
    title: "Calendar",
    query: Query_1.default,
    component: WeeklyCalendar,
});
