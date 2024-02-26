import React, { useState } from "react";
import classNames from "classnames";
import CheckIcon from "~/icons/toggle/CheckIcon";
import CloseIcon from "~/icons/Close";
import styles from "./styles.module.scss";

interface IProps {
  size?: "Small" | "Large";
  selected: boolean;
  square?: boolean;
  color?: "blue" | "green";
  removable?: boolean;
}

export default function Check({
  size = "Small",
  square,
  selected,
  color = "blue",
  removable = false,
}: IProps) {
  const [isHover, setHover] = useState(false);

  const className = classNames(styles.check, styles[`check${size}`], {
    [styles.checkSquare]: square,
    [styles.checkSelectedBlue]: selected && color === "blue",
    [styles.checkSelectedGreen]: selected && color === "green",
    [styles.checkSelectedRed]:
      removable && isHover && selected && color === "green",
  });

  const hoveron = () => setHover(true);
  const hoveroff = () => setHover(false);

  return (
    <div className={className} onMouseEnter={hoveron} onMouseLeave={hoveroff}>
      {removable
        ? !isHover
          ? selected && <CheckIcon />
          : selected && <CloseIcon color="#fff" width="10" height="10" />
        : selected && <CheckIcon />}
    </div>
  );
}
