import React from "react";
import Font from "~/components/Font";
import Form from "~/components/Form";
import CheckedIn from "./CheckedIn";
import { IContact } from "./ContactCard/types/Contact";
import styles from "./styles.module.scss";

interface IProps {
  contacts: IContact[];
}

export default function CheckInTemplate({ contacts }: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <Font block={true} size="large" color="gray-900" weight="xBold">
          Attendees
        </Font>
        <Font block={true} size="medium" color="gray-600" weight="xBold">
          15/15
        </Font>
      </div>
      <div className={styles.input_container}>
        <Form.Text placeholder="Manually Add to Class" name="search" />
      </div>
      <div className={styles.check_in_container}>
        <CheckedIn contacts={contacts} scroll={true} />
      </div>
    </div>
  );
}
