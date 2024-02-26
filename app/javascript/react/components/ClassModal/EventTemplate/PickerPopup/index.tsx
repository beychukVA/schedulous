import React, { ReactElement, useState } from "react";
import Popup from "reactjs-popup";
import styles from "./styles.module.scss";

interface IProps {
  classes?: string;
  trigger: ReactElement;
  content: ReactElement;
}

export default function PickerPopup({ classes, trigger, content }: IProps) {
  const [popupStatus, setPopupStatus] = useState(false);

  const togglePopup = () => setPopupStatus(!popupStatus);

  return (
    <Popup
      key="Schedules Select"
      on={["click"]}
      position="right center"
      className={classes}
      onOpen={() => togglePopup()}
      onClose={() => togglePopup()}
      trigger={<div>{trigger}</div>}
    >
      {content}
    </Popup>
  );
}
