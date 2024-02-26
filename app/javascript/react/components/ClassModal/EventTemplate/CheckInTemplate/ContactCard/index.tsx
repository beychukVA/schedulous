import React, { useState } from "react";
import Profile from "~/components/InboxMenu/Tabs/Content/ProfileContent/Profile/Profile";
import styles from "./styles.module.scss";
import Check from "~/components/Check";
import classNames from "classnames";

interface IProps {
  avatar?: string;
  name: string;
  email: string;
  favorite?: boolean;
  onChecked: (isChecked: boolean) => void;
}

export default function ContactCard({
  name,
  email,
  favorite,
  onChecked,
}: IProps) {
  const [isChecked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked(!isChecked);
    onChecked(isChecked);
  };

  return (
    <div className={styles.container}>
      <Profile
        classes={styles.profile}
        name={name}
        email={email}
        favorite={favorite}
      />
      <div
        className={classNames(styles.icon, {
          Checked: isChecked,
        })}
        onClick={toggleChecked}
      >
        <Check selected={isChecked} color="green" removable={true} />
      </div>
    </div>
  );
}
