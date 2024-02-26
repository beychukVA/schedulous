import React from "react";
import styles from "./styles.module.scss";
import Font from "~/components/Font";
import Item from "../Item";
import Button from "~/components/Button";
import SmileIcon from "~/icons/Smile";
import EmailIcon from "~/icons/Email";
import PhoneIcon from "~/icons/Phone";
import WatchIcon from "~/icons/Watch";
import WristWatchIcon from "~/icons/WristWatch";
import CalendarSmallIcon from "~/icons/CalendarSmall";
import PersonIcon from "~/icons/toggle/Person";

interface IProps {
  eventDate: string;
  eventHour: string;
  eventMinutes: string;
  eventAbbreviation: string;
  eventDuration: string;
  eventStaff: string;
  eventGuest: string;
  eventPhoneNumber: string;
  eventEmail: string;
  onChangeIsEditEvent: () => void;
}

export default function PreviewEvent({
  eventDate,
  eventHour,
  eventMinutes,
  eventAbbreviation,
  eventDuration,
  eventStaff,
  eventGuest,
  eventPhoneNumber,
  eventEmail,
  onChangeIsEditEvent,
}: IProps) {
  return (
    <>
      <div className={styles.title}>
        <Font block={true} size="large" color="gray-900" weight="xBold">
          Details
        </Font>
      </div>
      <Item
        title="Staff"
        subtitle={eventStaff}
        icon={
          <PersonIcon width="16" height="16" color="#718096" strokeWidth="3" />
        }
      />
      <Item
        title="Guest"
        subtitle={eventGuest}
        icon={<SmileIcon color="#718096" />}
        mt="large"
      />
      <Item
        title="Phone Number"
        subtitle={eventPhoneNumber}
        icon={<PhoneIcon color="#718096" />}
        mt="large"
        mb="large"
      />
      <Item
        title="Email Address"
        subtitle={eventEmail}
        icon={<EmailIcon color="#718096" />}
        mt="large"
        mb="large"
      />
      <div className={styles.title}>
        <Font block={true} size="large" color="gray-900" weight="xBold">
          Date & Time
        </Font>
      </div>
      <div className={styles.popup_container}>
        <Item title="Date" subtitle={eventDate} icon={<CalendarSmallIcon />} />
      </div>
      <div className={styles.popup_container}>
        <Item
          title="Start Time"
          subtitle={`${eventHour}:${eventMinutes}${eventAbbreviation}`}
          icon={<WatchIcon />}
          mt="large"
        />
      </div>
      <div className={styles.popup_container}>
        <Item
          title="Duration"
          subtitle={`${eventDuration}m`}
          icon={<WristWatchIcon />}
          mt="large"
        />
      </div>
      <div className={styles.left_buttons_container}>
        <Button
          className={styles.button}
          title="Edit Event"
          style="primary"
          onClick={() => onChangeIsEditEvent()}
        />
        <Button
          className={`${styles.button} ${styles.red}`}
          title="Cancel Event"
          style="secondary"
          onClick={() => ""}
        />
      </div>
    </>
  );
}
