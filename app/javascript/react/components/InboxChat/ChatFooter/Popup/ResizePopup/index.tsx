import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import Font from "~/components/Font";
import styles from "./styles.module.scss";
import Resize from "~/icons/Resize.jsx";
import Form from "~/components//Form";

export default function ResizePopup() {
  const [popupStatus, setPopupStatus] = useState(false);

  const togglePopup = () => setPopupStatus(!popupStatus);

  const handleLogout = () => {};

  return (
    <Popup
      key="Search Contacts"
      on={["click"]}
      position="top center"
      className={styles.popup}
      onOpen={() => togglePopup()}
      onClose={() => togglePopup()}
      trigger={
        <div className={styles.link}>
          <Resize color={popupStatus ? "#194BFB" : "#718096"} />
        </div>
      }
    >
      <div className={styles.popupMenu}>
        <Form.Text name="search" label="Search" />
        <Link to="" className={styles.popupMenuLink}>
          <Font size="small" weight="bold">
            Contact’s First Name
          </Font>
        </Link>
        <hr />
        <Link to="" className={styles.popupMenuLink}>
          <Font size="small" weight="bold">
            Contact’s Last Name
          </Font>
        </Link>
        <hr />
        <Link to="" className={styles.popupMenuLink}>
          <Font size="small" weight="bold">
            Contact’s Email
          </Font>
        </Link>
        <hr />
        <Link to="" className={styles.popupMenuLink}>
          <Font size="small" weight="bold">
            Contact’s Phone Number
          </Font>
        </Link>
        <hr />
      </div>
    </Popup>
  );
}
