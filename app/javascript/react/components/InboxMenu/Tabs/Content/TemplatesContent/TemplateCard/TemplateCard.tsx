import React from "react";
import Font from "~/components/Font";
import styles from "./styles.module.scss";

interface IProps {
  message: string;
  category: string;
}

export default function TemplateCard({ message, category }: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <Font
          block={false}
          size="small"
          weight="regular"
          color="black"
          mb="none"
          mt="none"
        >
          {message}
        </Font>
      </div>
      <div className={styles.category}>
        <Font
          block={false}
          size="small"
          weight="regular"
          color="black"
          mb="none"
          mt="none"
        >
          {category}
        </Font>
      </div>
    </div>
  );
}
