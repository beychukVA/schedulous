import * as React from "react";
import styles from "../styles.module.scss";
import classNames from "classnames";
import DownArrow from "~/icons/DownArrow";

export default function Select({
  className,
  label,
  mb = false,
  mr = false,
  ...props
}: any) {
  const [isFocus, setFocus] = React.useState(false);
  return (
    <div
      className={classNames(styles.container, {
        [styles.marginRight]: mr,
      })}
    >
      <label
        className={classNames(styles.labelTop, {
          [styles.labelTopBold]: isFocus,
        })}
      >
        {label}
      </label>
      <div
        className={classNames(styles.downArrow, {
          [styles.upArrow]: isFocus,
        })}
      >
        <DownArrow color="#D8E3F8" />
      </div>
      <select
        className={classNames(styles.control, className, {
          [styles.marginBottom]: mb,
        })}
        {...props}
        defaultValue={props?.default}
        onChange={(event) => props?.onChangeOption(event.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      >
        {/* <option value=""></option> */}
        {props.options.map((op, index) => {
          return (
            <>
              <option value={op.value} key={index}>
                {op.label}
              </option>
            </>
          );
        })}
      </select>
    </div>
  );
}
