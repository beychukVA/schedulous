import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import Font from "~/components/Font";
import styles from "./styles.module.scss";
import Smile from "~/icons/Smile.jsx";
import Form from "~/components//Form";
import EmojiPicker from "emoji-picker-react";

export default function SmilePopup() {
  const [popupStatus, setPopupStatus] = useState(false);

  const togglePopup = () => setPopupStatus(!popupStatus);

  const handleLogout = () => {};

  return (
    <Popup
      key="Smiles"
      on={["click"]}
      position="top center"
      className={styles.popup}
      onOpen={() => togglePopup()}
      onClose={() => togglePopup()}
      trigger={
        <div className={styles.link}>
          <Smile color={popupStatus ? "#194BFB" : "#718096"} />
        </div>
      }
    >
      <EmojiPicker width={330} />
    </Popup>
  );
}
