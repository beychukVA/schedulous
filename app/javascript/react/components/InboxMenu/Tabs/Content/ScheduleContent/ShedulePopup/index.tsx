import React, { ReactNode, useState } from "react";
import Popup from "reactjs-popup";
import styles from "./styles.module.scss";
import DownArrow from "~/icons/DownArrow";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Font from "~/components/Font";
import CheckIcon from "~/icons/toggle/CheckIcon";

interface IProps {
  classes?: string;
}

const popupItems = [
  {
    id: 0,
    title: "All",
  },
  {
    id: 1,
    title: "Appointments",
  },
  {
    id: 2,
    title: "Classes",
  },
];

export default function SchedulePopup({ classes }: IProps) {
  const [popupStatus, setPopupStatus] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  const togglePopup = () => setPopupStatus(!popupStatus);
  const handleSelectedItem = (id) => setSelectedItem(id);

  return (
    <Popup
      key="Schedules Select"
      on={["click"]}
      position="bottom right"
      className={classes}
      onOpen={() => togglePopup()}
      onClose={() => togglePopup()}
      trigger={
        <div className={styles.link}>
          <Font
            size="xSmall"
            weight="xBold"
            color="gray"
            mb="none"
            mt="none"
            uppercase={true}
          >
            {popupItems[selectedItem].title}
          </Font>
          <div
            className={classNames(styles.arrow, {
              [styles.arrow_up]: popupStatus,
              [styles.arrow_down]: !popupStatus,
            })}
          >
            <DownArrow color="#194BFB" />
          </div>
        </div>
      }
    >
      <div className={styles.popupMenu}>
        {popupItems.map(({ id, title }) => (
          <Link
            onClick={() => {
              handleSelectedItem(id);
            }}
            key={id}
            to=""
            className={styles.popupMenuLink}
          >
            <Font
              className={classNames("", {
                [styles.selected]: selectedItem === id,
              })}
              size="xSmall"
              weight="regular"
            >
              {title}
            </Font>
            <div className={styles.icon}>
              <CheckIcon
                color={selectedItem === id ? "#194BFB" : ""}
                width="16"
                height="16"
              />
            </div>
          </Link>
        ))}
      </div>
    </Popup>
  );
}
