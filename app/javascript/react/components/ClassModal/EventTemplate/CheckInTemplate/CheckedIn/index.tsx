import classNames from "classnames";
import React, { useState } from "react";
import Font from "~/components/Font";
import ContactCard from "../ContactCard";
import { IContact } from "../ContactCard/types/Contact";
import styles from "./styles.module.scss";

interface IProps {
  contacts: IContact[];
  scroll?: boolean;
}

export default function CheckedIn({ contacts, scroll = false }: IProps) {
  const [checkedCount, setCheckedCount] = useState(0);

  const handleChecked = (isChecked: boolean) => {
    if (isChecked) {
      setCheckedCount(checkedCount - 1);
    } else {
      setCheckedCount(checkedCount + 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <Font
          block={false}
          size="xSmall"
          weight="xBold"
          color="gray"
          mb="none"
          mt="none"
        >
          CHECKED-IN
        </Font>
        <Font
          block={false}
          size="xSmall"
          weight="xBold"
          color="gray"
          mb="none"
          mt="none"
        >
          {checkedCount}/15
        </Font>
      </div>
      <hr />
      <ul
        className={classNames(styles.content_container, {
          [styles.scroll]: scroll,
        })}
      >
        {contacts &&
          contacts.map(({ id, name, email, favorite }) => (
            <ContactCard
              key={id}
              name={name}
              email={email}
              favorite={favorite}
              onChecked={handleChecked}
            />
          ))}
      </ul>
    </div>
  );
}
