import React from "react";
import Font from "~/components/Font";
import Profile from "~/components/InboxMenu/Tabs/Content/ProfileContent/Profile/Profile";
import styles from "./styles.module.scss";

export default function ChatMessage({ avatar, name, time, text }) {
  const AccountName = "Jamie Smith";

  return (
    <div
      className={`${styles.container} ${
        name === AccountName ? styles.left : styles.right
      }`}
    >
      <Font
        block={true}
        size="small"
        color="black"
        weight="regular"
        className={styles.text}
      >
        {text}
      </Font>
      <div className={styles.sender_container}>
        <Profile
          name={name}
          email={time}
          flex={true}
          size={20}
          nameStyle={styles.name}
          emailStyle={styles.email}
        />
      </div>
    </div>
  );
}
