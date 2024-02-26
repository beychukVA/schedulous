import React from "react";
import styles from "./styles.module.scss";
import Font from "~/components/Font";
import {
  overlappingEvents,
  addLeftIndexAndSortByEventLength,
} from "~/utils/eventPosition";
import classNames from "classnames";

const APPOINTMENT_WIDTH = 160;
const HOUR_HEIGHT = 60;
const DAY_LENGTH = 24;
const DAY_START = 100;
const HEIGHT = HOUR_HEIGHT * DAY_LENGTH;

export default function WeekDay({ events, offset, date }) {
  const overlappingEventsCount = overlappingEvents(events);
  const eventsWithLeftIndex = addLeftIndexAndSortByEventLength(
    events,
    overlappingEventsCount
  );

  return (
    <td style={{ padding: 0, border: "none" }}>
      <div
        className={styles.column}
        style={{
          height: HEIGHT,
          width:
            overlappingEventsCount > 0
              ? APPOINTMENT_WIDTH * overlappingEventsCount + 20
              : "100%",
        }}
      >
        <div className={styles.header} style={{ top: offset }}>
          <Font
            block={true}
            size="small"
            weight="bold"
            color="gray-600"
            mb="small"
          >
            {date.format("ddd").toUpperCase()}
          </Font>
          <Font block={true} size="small" weight="bold" color="primary">
            {date.format("D")}
          </Font>
        </div>
        <div>&nbsp;</div>
        {eventsWithLeftIndex.map((event, index) => (
          <div
            key={index}
            className={styles.event}
            style={{
              width:
                overlappingEventsCount > 0
                  ? APPOINTMENT_WIDTH
                  : "calc(100% - 20px)",
              top: timeToTop(event.militaryStartTime),
              left: APPOINTMENT_WIDTH * event.leftIndex,
              height: timeToHeight(
                event.militaryStartTime,
                event.militaryEndTime
              ),
            }}
          >
            <div
              className={classNames(
                styles.eventInner,
                styles[`eventInner${event.type}`]
              )}
            >
              <div className={styles.eventTitle}>{event.name}</div>
              {event.capacity && (
                <EventCapacity
                  capacity={event.capacity}
                  reserved={event.reserved}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </td>
  );
}

function EventCapacity({ capacity, reserved }) {
  return (
    <div
      className={classNames(styles.capacity, {
        [styles.capacityFull]: capacity - reserved < 4,
      })}
    >
      {reserved}/{capacity} ({capacity - reserved} remaining)
    </div>
  );
}

const timeToTop = (time) => {
  const hours = Math.floor(time / 100);
  const minutes = time % 100;
  return (hours - DAY_START / 100) * HOUR_HEIGHT + (minutes / 60) * HOUR_HEIGHT;
};

const timeToHeight = (start, end) => {
  const startHours = Math.floor(start / 100);
  const startMinutes = start % 100;
  const endHours = Math.floor(end / 100);
  const endMinutes = end % 100;
  return (
    (endHours - startHours) * HOUR_HEIGHT +
    (endMinutes - startMinutes) * (HOUR_HEIGHT / 60)
  );
};
