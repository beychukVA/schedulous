import classNames from "classnames";
import React from "react";
import Font from "~/components/Font";
import MembershipSatus from "~/components/MembershipStatus";
import Expand from "~/icons/Expand";
import styles from "./styles.module.scss";

interface IProp {
  title: string;
  collapsed: boolean;
  onChangeCollapsed: () => void;
}

export default function ChatHeader({
  title,
  collapsed,
  onChangeCollapsed,
}: IProp) {
  return (
    <div className={styles.container}>
      <Font
        block={true}
        size="xLarge"
        uppercase={false}
        weight="xBold"
        color="black"
      >
        {title}
      </Font>
      <div className={styles.status_container}>
        {/* <MembershipSatus/> */}
        <div className={styles.status}></div>
        <Font
          block={true}
          size="small"
          uppercase={false}
          weight="xBold"
          color="purple"
        >
          Lead
        </Font>
        <button
          onClick={() => onChangeCollapsed()}
          className={classNames(styles.expand_icon, {
            [styles.hide]: !collapsed,
          })}
        >
          <Expand />
        </button>
      </div>
    </div>
  );
}
