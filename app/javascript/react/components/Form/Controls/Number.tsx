import React, { InputHTMLAttributes } from "react";
import styles from "../styles.module.scss";
import classNames from "classnames";

type IProps = InputHTMLAttributes<HTMLInputElement>;

export default function NumberInput({ className, ...props }: IProps) {
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
        type="number"
        className={classNames(styles.control, className)}
        {...props}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  );
}
