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
import classNames from "classnames";

const staffOptions = [
  { value: "Matt Brow 1", label: "Matt Brow 1" },
  { value: "Matt Brow 2", label: "Matt Brow 2" },
  { value: "Matt Brow 3", label: "Matt Brow 3" },
];

const guestOptions = [
  { value: "Jamie Smith 1", label: "Jamie Smith 1" },
  { value: "Jamie Smith 2", label: "Jamie Smith 2" },
  { value: "Jamie Smith 3", label: "Jamie Smith 3" },
];

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

export default function EditEvent({
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
  const [month, setMonth] = useState(format(new Date(eventDate), "MMMM"));
  const [monthIndex, setMonthIndex] = useState(0);
  const [day, setDay] = useState(format(new Date(eventDate), "dd"));
  const [year, setYear] = useState(format(new Date(eventDate), "yyyy"));
  const [hour, setHour] = useState(eventHour);
  const [minute, setMinute] = useState(eventMinutes);
  const [abbreviation, setAbbreviation] = useState(eventAbbreviation);
  const [duration, setDuration] = useState(eventDuration);
  const [staff, setStaff] = useState(eventStaff);
  const [guest, setGuest] = useState(eventGuest);
  const [phone, setPhone] = useState(eventPhoneNumber);
  const [email, setEmail] = useState(eventEmail);

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
        label="Staff"
        default={staff}
        options={staffOptions}
        onChangeOption={setStaff}
      />
      <Form.Select
        className={styles.select}
        mb={true}
        label="Guest"
        default={guest}
        options={guestOptions}
        onChangeOption={setGuest}
      />
      <Form.Number
        className={styles.marginBottom}
        type="phone"
        value={phone}
        aria-label="Phone Number"
        onChange={(event) => setPhone(event.target.value)}
      />
      <Form.Email
        value={email}
        aria-label="Email Address"
        onChange={(event) => setEmail(event.target.value)}
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
          label="Appointment Duration"
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
          disabled={!phone || !email}
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
