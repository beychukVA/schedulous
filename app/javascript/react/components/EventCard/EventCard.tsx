import classNames from "classnames";
import React, { ReactElement } from "react";
import Font from "~/components/Font";
import styles from "./styles.module.scss";

interface IProps {
  id: string | number;
  classes?: string;
  title: string;
  subTitle: string;
  color: string;
  icon: ReactElement;
  onClick: (id: string | number) => void;
  border?: true | false;
  borderBottom?: true | false;
}

export default function EventCard({
  id,
  classes = "",
  title,
  subTitle,
  color,
  icon,
  border = true,
  borderBottom = false,
  onClick,
}: IProps) {
  return (
    <div
      className={classNames(`${styles.container} ${classes}`, {
        [styles.borders]: border,
        [styles.border_bottom]: borderBottom,
      })}
    >
      <div
        style={{ borderLeft: `3px solid ${color}` }}
        className={styles.event_detail}
      >
        <div className={styles.title}>
          <Font
            block={false}
            size="small"
            weight="xBold"
            color="gray-900"
            mb="none"
            mt="none"
          >
            {title}
          </Font>
        </div>
        <div className={styles.sub_title}>
          <Font
            block={false}
            size="small"
            weight="semiBold"
            color="gray"
            mb="none"
            mt="none"
          >
            {subTitle}
          </Font>
        </div>
      </div>
      <div
        onClick={() => {
          onClick(id);
        }}
        className={styles.icon}
      >
        {icon}
      </div>
    </div>
  );
}
