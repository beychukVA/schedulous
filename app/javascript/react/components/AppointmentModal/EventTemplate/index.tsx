import React, { useState } from "react";
import styles from "./styles.module.scss";
import IModalData from "../types/Data";
import ProfileTemplate from "./ProfileTemplate";
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
  const [eventStaff, setEventStaff] = useState("Matt Brow 2");
  const [eventGuest, setEventGuest] = useState("Jamie Smith 2");
  const [eventPhoneNumber, setEventPhoneNumber] = useState("408-259-7004");
  const [eventEmail, setEventEnail] = useState("jamiesmith@gmail.com");

  const { profile, history } = data;

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
            eventStaff={eventStaff}
            eventGuest={eventGuest}
            eventPhoneNumber={eventPhoneNumber}
            eventEmail={eventEmail}
            onChangeIsEditEvent={() => setIsEditEvent(false)}
          />
        ) : (
          <PreviewEvent
            eventDate={eventDate}
            eventHour={eventHour}
            eventMinutes={eventMinutes}
            eventAbbreviation={eventAbbreviation}
            eventDuration={eventDuration}
            eventStaff={eventStaff}
            eventGuest={eventGuest}
            eventPhoneNumber={eventPhoneNumber}
            eventEmail={eventEmail}
            onChangeIsEditEvent={() => setIsEditEvent(true)}
          />
        )}
      </div>
      <div className={styles.right_container}>
        <ProfileTemplate profile={profile} history={history} />
      </div>
    </div>
  );
}
