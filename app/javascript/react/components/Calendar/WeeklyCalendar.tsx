import React, { useState } from "react";
import WeekDay from "./WeekDay";
import HourColumn from "./HourColumn";
import useScrollPosition from "~/hooks/useScrollPosition";
import moment from "moment";
import classNames from "classnames";
import Button from "~/components/Button";
import LeftChevron from "~/icons/LeftChevron";
import SCHEDULE_QUERY from "./Query";

import styles from "./styles.module.scss";
import createPage from "~/utils/createPage";

const WeeklyCalendar = ({ data }) => {
  const { programInstances } = data;
  const { y } = useScrollPosition("scrollable");
  const { x } = useScrollPosition("table-overflow");
  const [startDate, setStartDate] = useState(moment().clone().startOf("week"));
  return (
    <>
      <div className={styles.calendarHeader}>
        <div className={styles.weekSelector}>
          <div
            className={styles.chevron}
            onClick={() => setStartDate(startDate.clone().subtract(7, "days"))}
          >
            <LeftChevron />
          </div>
          <div className={styles.weekSelectorDate}>
            {startDate.format("MMM D")}
          </div>
          <div
            className={classNames(styles.chevron, styles.chevronRight)}
            onClick={() => setStartDate(startDate.clone().add(7, "days"))}
          >
            <LeftChevron />
          </div>
        </div>
        <div className={styles.calendarHeaderButtons}>
          <Button title="Add to Schedule" size="small" />
        </div>
      </div>
      <div id="table-overflow" className={styles.tableOverflow}>
        <table className={styles.table}>
          <tbody>
            <tr>
              <HourColumn offset={x} />
              {Array.from({ length: 7 }).map((_, i) => (
                <WeekDay
                  date={startDate.clone().add(i, "days")}
                  offset={y >= 75 ? y - 75 : 0}
                  key={i}
                  events={programInstances.filter((event: any) => {
                    if (
                      moment(event.datetime).isSame(
                        startDate.clone().add(i, "days"),
                        "day"
                      )
                    )
                      return event;
                  })}
                />
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default createPage({
  title: "Calendar",
  query: SCHEDULE_QUERY,
  component: WeeklyCalendar,
});
