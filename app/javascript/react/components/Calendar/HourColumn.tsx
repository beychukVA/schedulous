import React from "react";
import convertTimeFromMilitary from "~/utils/convertTimeFromMilitary";
import classNames from "classnames";
import Font from "~/components/Font";

import styles from "./styles.module.scss";

const HOUR_HEIGHT = 60;
const DAY_START = 100;
const DAY_LENGTH = 24;
const HEIGHT = HOUR_HEIGHT * DAY_LENGTH;

const hours = Array.from({ length: DAY_LENGTH }, (_, i) => {
  const hour = DAY_START + i * 100;
  return convertTimeFromMilitary(hour);
});

export default function HourView({ offset }) {
  return (
    <td style={{ padding: 0, width: 70 }}>
      <div
        className={classNames(styles.column, styles.hourColumn)}
        style={{
          height: HEIGHT,
          width: 70,
          minWidth: 70,
          left: offset,
        }}
      >
        {hours.map((hour, i) => (
          <div key={i} className={styles.hour} style={{ top: i * HOUR_HEIGHT }}>
            <Font
              size="small"
              color="gray-600"
              weight={i % 2 == 0 ? "bold" : "regular"}
            >
              {hour}
            </Font>
          </div>
        ))}
      </div>
    </td>
  );
}
