import React, { ReactElement } from "react";
import Font from "~/components/Font";
import styles from "./styles.module.scss";

interface IProps {
  title: string;
  subtitle: string | number;
  icon: ReactElement;
  mt?: "large";
  mb?: "large";
}

export default function Item({ title, subtitle, icon, mt, mb }: IProps) {
  return (
    <div
      className={`${styles.container} ${
        mt && mt === "large" ? styles.margin_top_large : ""
      } ${mb && mb === "large" ? styles.margin_bottom_large : ""} `}
    >
      <div className={styles.title}>
        <Font
          block={true}
          size="xSmall"
          color="gray-500"
          weight="semiBold"
          className={styles.text}
        >
          {title}
        </Font>
      </div>
      <div className={styles.content}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.subtitle}>
          <Font
            block={true}
            size="large"
            color="gray-900"
            weight="regular"
            className={styles.text}
          >
            {subtitle}
          </Font>
        </div>
      </div>
    </div>
  );
}
