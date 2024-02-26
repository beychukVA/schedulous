import React, { useState } from "react";
import Button from "~/components/Button";
import DatePicker from "~/components/DatePicker";
import styles from "./styles.module.scss";
import SchedulePopup from "./ShedulePopup";
import Font from "~/components/Font";
import { IEvent } from "../types/Events";
import Events from "./Event/";

const events: IEvent[] = [
  {
    id: 1,
    title: "Unlimited MMA",
    subTitle: "9/15/22 7:00am (1 hr)",
    color: "#936dff",
    favorite: true,
  },
  {
    id: 2,
    title: "VIP Tour - Coach Sara",
    subTitle: "9/15/22 8:00am (30m)",
    color: "#ff784b",
    favorite: false,
  },
  {
    id: 3,
    title: "Unlimited MMA",
    subTitle: "9/15/22 7:00am (1 hr)",
    color: "#ffc837",
    favorite: false,
  },
  {
    id: 4,
    title: "Unlimited MMA",
    subTitle: "9/15/22 7:00am (1 hr)",
    color: "#936dff",
    favorite: false,
  },
  {
    id: 5,
    title: "VIP Tour - Coach Sara",
    subTitle: "9/15/22 8:00am (30m)",
    color: "#ff784b",
    favorite: true,
  },
  {
    id: 6,
    title: "Unlimited MMA",
    subTitle: "9/15/22 7:00am (1 hr)",
    color: "#ffc837",
    favorite: false,
  },
  {
    id: 7,
    title: "Unlimited MMA",
    subTitle: "9/15/22 7:00am (1 hr)",
    color: "#936dff",
    favorite: false,
  },
  {
    id: 8,
    title: "VIP Tour - Coach Sara",
    subTitle: "9/15/22 8:00am (30m)",
    color: "#ff784b",
    favorite: false,
  },
  {
    id: 9,
    title: "Unlimited MMA",
    subTitle: "9/15/22 7:00am (1 hr)",
    color: "#ffc837",
    favorite: false,
  },
  {
    id: 10,
    title: "Unlimited MMA",
    subTitle: "9/15/22 7:00am (1 hr)",
    color: "#ffc837",
    favorite: false,
  },
];

export default function ScheduleContent() {
  const [data, setData] = useState(null);

  const onChange = (dayStr) => {
    setData(dayStr);
  };

  return (
    <div className={styles.container}>
      <div className={styles.calendar}>
        <DatePicker formatRegex="cccc, MMM dd" onChange={onChange} />
      </div>
      <div className={styles.schedules_container}>
        <div className={styles.schedules_container_header}>
          <div>
            <Font
              block={false}
              size="xSmall"
              weight="xBold"
              color="gray"
              mb="none"
              mt="none"
              uppercase={true}
            >
              {data}
            </Font>
          </div>
          <div>
            <SchedulePopup classes={styles.schedules_popup} />
          </div>
        </div>
        <Events events={events} />
      </div>
      <div className={styles.button_container}>
        <Button
          className={styles.button}
          title="Schedule Appointment"
          style="tertiary"
          onClick={() => ""}
        />
      </div>
    </div>
  );
}
