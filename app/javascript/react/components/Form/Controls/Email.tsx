import * as React from "react";
import styles from "../styles.module.scss";
import classNames from "classnames";

export default function EmailInput({ className, ...props }: any) {
  const [isFocus, setFocus] = React.useState(false);
  return (
    <div className={styles.container}>
      <label
        className={classNames(styles.label, {
          [styles.labelTop]: props?.value,
          [styles.labelTopBold]: isFocus,
        })}
      >
        {props?.["aria-label"]}
      </label>
      <input
        type="email"
        className={classNames(styles.control, className)}
        {...props}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  );
}
