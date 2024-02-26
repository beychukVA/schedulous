import React from "react";
import Button from "~/components/Button";
import Profile from "~/components/InboxMenu/Tabs/Content/ProfileContent/Profile/Profile";
import styles from "./styles.module.scss";
import History from "~/components/InboxMenu/Tabs/Content/ProfileContent/History/History";
import { IProfile } from "~/components/InboxMenu/Tabs/Content/ProfileContent/Profile/types/Profile";
import { IHistory } from "~/components/InboxMenu/Tabs/Content/types/History";

interface IProps {
  profile: IProfile;
  history: IHistory[];
}

export default function ProfileTemplate({ profile, history }: IProps) {
  return (
    <>
      <Profile name={profile.name} email={profile.email} mb="large" />
      <div className={styles.features}>
        <span>Upcoming - Is future appointment</span>
        <span>Past - Is past</span>
        <span>Attended - Admin checks them in</span>
        <span>No Show - Admin clicks mark no show</span>
      </div>
      <div className={styles.right_buttons_container}>
        <Button
          className={`${styles.button} ${styles.right_button}`}
          title="Check-In"
          style="primary"
        />
        <Button
          className={`${styles.button} ${styles.right_button}`}
          title="Mark as No Show"
          style="secondary"
          onClick={() => ""}
        />
      </div>
      <div className={styles.history_container}>
        <History historys={history} scroll={true} />
      </div>
    </>
  );
}
