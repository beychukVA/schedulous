import React from "react";
import styles from "./styles.module.scss";
import Font from "~/components/Font";
import Item from "../Item";
import Button from "~/components/Button";
import LocationIcon from "~/icons/Location";
import PeopleIcon from "~/icons/People";
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
  eventFacility: string;
  eventInstructor: string;
  eventClassSize: string;
  onChangeIsEditEvent: () => void;
}

export default function PreviewEvent({
  eventDate,
  eventHour,
  eventMinutes,
  eventAbbreviation,
  eventDuration,
  eventFacility,
  eventInstructor,
  eventClassSize,
  onChangeIsEditEvent,
}: IProps) {
  return (
    <>
      <div className={styles.title}>
        <Font block={true} size="large" color="gray-900" weight="xBold">
          Details
        </Font>
      </div>
      <Item title="Facility" subtitle={eventFacility} icon={<LocationIcon />} />
      <Item
        title="Instructor"
        subtitle={eventInstructor}
        icon={
          <PersonIcon width="16" height="16" color="#718096" strokeWidth="3" />
        }
        mt="large"
      />
      <Item
        title="Class Size"
        subtitle={eventClassSize}
        icon={<PeopleIcon width="16" height="16" strokeWidth="3" />}
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
