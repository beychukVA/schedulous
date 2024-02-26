import React from "react";
import Font from "~/components/Font";
import styles from "./styles.module.scss";

interface IProps {
  title: string;
  subTitle: string;
  status: string;
  color: string;
}

export default function HistoryCard({
  title,
  subTitle,
  status,
  color,
}: IProps) {
  return (
    <div className={styles.container}>
      <div
        style={{ backgroundColor: color }}
        className={styles.indicator}
      ></div>
      <div className={styles.content_container}>
        <div className={styles.title}>
          <Font
            block={false}
            size="small"
            weight="regular"
            color="black"
            mb="none"
            mt="none"
          >
            {title}
          </Font>
        </div>
        <div className={styles.sub_title}>
          <Font
            block={false}
            size="xSmall"
            weight="regular"
            color="gray"
            mb="none"
            mt="none"
          >
            {subTitle}
          </Font>
        </div>
      </div>
      <div className={styles.status}>
        <Font
          block={false}
          size="xSmall"
          weight="regular"
          color="gray"
          mb="none"
          mt="none"
        >
          {status}
        </Font>
      </div>
    </div>
  );
}
