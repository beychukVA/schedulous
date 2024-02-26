import React, { useState } from "react";
import styles from "./styles.module.scss";
import IModalData from "../types/Data";
import CheckInTemplate from "./CheckInTemplate";
import { format } from "date-fns";
import PreviewEvent from "./PreviewEvent";
import EditEvent from "./EditEvent";

interface IProps {
  data: IModalData;
}

export default function EventTemplate({ data }: IProps) {
  const [isEditEvent, setIsEditEvent] = useState(false);
  const [eventDate, setEventDate] = useState(
    format(new Date(), "MMMM dd, yyyy")
  );
  const [eventHour, setEventHour] = useState("10");
  const [eventMinutes, setEventMinutes] = useState("30");
  const [eventAbbreviation, setEventAbbreviation] = useState("PM");
  const [eventDuration, setEventDuration] = useState("60");
  const [eventFacility, setEventFacility] = useState("Room 2");
  const [eventInstructor, setEventInstructor] = useState("Smith");
  const [eventClassSize, setEventClassSize] = useState("18");

  const { contacts } = data;

  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        {isEditEvent ? (
          <EditEvent
            eventDate={eventDate}
            eventHour={eventHour}
            eventMinutes={eventMinutes}
            eventAbbreviation={eventAbbreviation}
            eventDuration={eventDuration}
            eventFacility={eventFacility}
            eventInstructor={eventInstructor}
            eventClassSize={eventClassSize}
            onChangeIsEditEvent={() => setIsEditEvent(false)}
          />
        ) : (
          <PreviewEvent
            eventDate={eventDate}
            eventHour={eventHour}
            eventMinutes={eventMinutes}
            eventAbbreviation={eventAbbreviation}
            eventDuration={eventDuration}
            eventFacility={eventFacility}
            eventInstructor={eventInstructor}
            eventClassSize={eventClassSize}
            onChangeIsEditEvent={() => setIsEditEvent(true)}
          />
        )}
      </div>
      <div className={styles.right_container}>
        <CheckInTemplate contacts={contacts} />
      </div>
    </div>
  );
}
