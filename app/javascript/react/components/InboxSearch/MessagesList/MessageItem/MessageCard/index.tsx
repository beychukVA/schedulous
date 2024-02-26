import React from "react";
import styles from "./styles.module.scss";
import FavoritesIcon from "~/icons/Favorites";
import Message from "~/components/InboxSearch/types/Message";
import Profile from "~/components/InboxMenu/Tabs/Content/ProfileContent/Profile/Profile";

interface IProps {
  message: Message;
  onChange: (id: number) => void;
}

export default function MessageCard({ message, onChange }: IProps) {
  const { id, title, subTitle, favorite } = message;

  return (
    <>
      <div className={styles.container}>
        <Profile name={title} email={subTitle} />
        <div
          onClick={() => {
            onChange(id);
          }}
          className={`${styles.favorite_icon} ${
            favorite ? styles.icon_visible : styles.icon_invisible
          }`}
        >
          <FavoritesIcon color={favorite ? "#936DFF" : "#96A3BE"} />
        </div>
      </div>
    </>
  );
}
