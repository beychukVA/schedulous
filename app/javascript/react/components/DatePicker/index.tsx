import React, { useEffect, useState } from "react";
import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks,
} from "date-fns";
import "./styles.scss";
import Font from "../Font";
import Prev from "~/icons/Prev";
import Next from "~/icons/Next";

interface IProps {
  onChange: (time: string) => void;
  formatRegex: string;
  lastDay?: boolean;
}

export default function DatePicker({
  onChange,
  formatRegex,
  lastDay = false,
}: IProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentDay, setCurrentDay] = useState(new Date());

  useEffect(() => onDateClickHandle(selectedDate, formatRegex), []);

  const changeMonthHandle = (btnType: string) => {
    if (btnType === "prev") {
      setCurrentMonth(subMonths(currentMonth, 1));
    }
    if (btnType === "next") {
      setCurrentMonth(addMonths(currentMonth, 1));
    }
  };

  const changeWeekHandle = (btnType: string) => {
    if (btnType === "prev") {
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === "next") {
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };

  const onDateClickHandle = (day: Date, formatDay: string) => {
    const dayStr = format(day, formatDay);
    setSelectedDate(day);
    onChange(dayStr);
  };

  const isLastDay = (day: Date, formatDay: string) => {
    const dayMs = Date.parse(format(day, formatDay));
    const currDayMs = Date.parse(format(currentDay, formatDay));

    if (dayMs < currDayMs) {
      return true;
    }
    return false;
  };

  const isCurrentDay = (day: Date, formatDay: string) => {
    const currDayMs = Date.parse(format(currentDay, formatDay));
    const dayMs = Date.parse(format(day, formatDay));

    if (currDayMs === dayMs) {
      return true;
    }
    return false;
  };

  const renderHeader = () => {
    const dateFormat = "MMMM";
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={() => changeWeekHandle("prev")}>
            <Prev color="#194BFB" />
          </div>
        </div>
        <div className="col col-center">
          <Font
            block={true}
            size="xSmall"
            weight="xBold"
            color="black"
            mb="none"
            mt="none"
            uppercase={true}
          >
            week of {format(currentMonth, dateFormat)} {currentWeek}
          </Font>
        </div>
        <div className="col col-end" onClick={() => changeWeekHandle("next")}>
          <div className="icon">
            <Next color="#194BFB" />
          </div>
        </div>
      </div>
    );
  };
  const renderDays = () => {
    const dateFormat = "EEEEE";
    const days: JSX.Element[] = [];
    let startDate: Date = startOfWeek(currentMonth, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          <Font
            block={false}
            size="xSmall"
            weight="xBold"
            color="black"
            mb="none"
            mt="none"
            uppercase={true}
          >
            {format(addDays(startDate, i), dateFormat)}
          </Font>
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  };
  const renderCells = () => {
    const startDate: Date = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate: Date = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    const dateFormat: string = "d";
    const rows: JSX.Element[] = [];
    let days: JSX.Element[] = [];
    let day: Date = startDate;
    let formattedDate: string = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`cell ${
              isSameDay(day, selectedDate) ? "selected" : ""
            } ${isCurrentDay(day, formatRegex) ? "today" : ""} ${
              lastDay && isLastDay(day, formatRegex) ? "last_day" : ""
            }`}
            key={day.toString()}
            onClick={() => {
              onDateClickHandle(cloneDay, formatRegex);
            }}
          >
            <Font
              className="number"
              block={false}
              size="xSmall"
              weight="medium"
              color="black"
              mb="none"
              mt="none"
              uppercase={true}
            >
              {formattedDate}
            </Font>
          </div>
        );
        day = addDays(day, 1);
      }

      rows.push(
        <div className="row" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };

  return (
    <div className="calendar">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
}
