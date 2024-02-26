import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Font from "~/components/Font";
import Button from "~/components/Button";
import Form from "~/components/Form";
import MonthPicker from "~/components/MonthPicker";
import DayPicker from "~/components/DayPicker";
import YearPicker from "~/components/YearPicker";
import HourPicker from "~/components/HourPicker";
import MinutePicker from "~/components/MinutePicker";
import AbbreviationPicker from "~/components/AbbreviationPicker";
import DurationPicker from "~/components/DurationPicker";
import { format } from "date-fns";

const facilityOptions = [
  { value: "Room 1", label: "Room 1" },
  { value: "Room 2", label: "Room 2" },
  { value: "Room 3", label: "Room 3" },
];

const instructorOptions = [
  { value: "John", label: "John" },
  { value: "Smith", label: "Smith" },
  { value: "John Smith", label: "John Smith" },
];

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

export default function EditEvent({
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
  const [month, setMonth] = useState(format(new Date(eventDate), "MMMM"));
  const [monthIndex, setMonthIndex] = useState(0);
  const [day, setDay] = useState(format(new Date(eventDate), "dd"));
  const [year, setYear] = useState(format(new Date(eventDate), "yyyy"));
  const [hour, setHour] = useState(eventHour);
  const [minute, setMinute] = useState(eventMinutes);
  const [abbreviation, setAbbreviation] = useState(eventAbbreviation);
  const [duration, setDuration] = useState(eventDuration);
  const [facility, setFacility] = useState(eventFacility);
  const [instructor, setInstructor] = useState(eventInstructor);
  const [classSize, setClassSize] = useState(eventClassSize);

  return (
    <>
      <div className={styles.title}>
        <Font block={true} size="large" color="gray-900" weight="xBold">
          Details
        </Font>
      </div>
      <Form.Select
        className={styles.select}
        mb={true}
        label="Facility"
        default={facility}
        options={facilityOptions}
        onChangeOption={setFacility}
      />
      <Form.Select
        className={styles.select}
        mb={true}
        label="Instructor"
        default={instructor}
        options={instructorOptions}
        onChangeOption={setInstructor}
      />
      <Form.Number
        value={classSize}
        aria-label="Class Size"
        onChange={(event) => setClassSize(event.target.value)}
      />
      <div className={styles.title}>
        <Font block={true} size="large" color="gray-900" weight="xBold">
          Date & Time
        </Font>
      </div>
      <div className={styles.popup_container}>
        <div className={styles.date_container}>
          <MonthPicker
            mb={true}
            mr={true}
            label="Month"
            className={styles.select}
            defaultValue={month}
            onChangeValue={setMonth}
            onChangeIndex={setMonthIndex}
          />
          <DayPicker
            mb={true}
            mr={true}
            label="Day"
            className={styles.select}
            defaultValue={day}
            year={year}
            month={monthIndex}
            onChange={setDay}
          />
          <YearPicker
            mb={true}
            label="Year"
            className={styles.select}
            defaultValue={year}
            onChange={setYear}
          />
        </div>
      </div>
      <div className={styles.popup_container}>
        <div className={styles.time_container}>
          <HourPicker
            mb={true}
            mr={true}
            label="Hour"
            className={styles.select}
            defaultValue={hour}
            onChange={setHour}
          />
          <MinutePicker
            mb={true}
            mr={true}
            label="Minute"
            className={styles.select}
            defaultValue={minute}
            onChange={setMinute}
          />
          <AbbreviationPicker
            mb={true}
            label="AM/PM"
            className={styles.select}
            defaultValue={abbreviation}
            onChange={setAbbreviation}
          />
        </div>
      </div>
      <div className={styles.popup_container}>
        <DurationPicker
          mb={true}
          label="Class Duration"
          defaultValue={duration}
          onChange={setDuration}
        />
      </div>
      <div className={styles.left_buttons_container}>
        <Button
          className={styles.button}
          title="Update Event"
          style="primary"
          onClick={() => ""}
          disabled={!classSize}
        />
        <Button
          className={`${styles.button} ${styles.red}`}
          title="Cancel Changes"
          style="secondary"
          onClick={() => onChangeIsEditEvent()}
        />
      </div>
    </>
  );
}
