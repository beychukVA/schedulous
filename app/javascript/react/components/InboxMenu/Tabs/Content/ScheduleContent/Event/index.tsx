import React from "react";
import { IEvent } from "../../types/Events";
import EventCard from "~/components/EventCard/EventCard";
import styles from "./styles.module.scss";
import PlusIcon from "~/icons/Plus.jsx";

interface IProps {
  events: IEvent[];
}

export default function Events({ events }: IProps) {
  return (
    <ul className={styles.container}>
      {events &&
        events.map(({ id, title, subTitle, color }) => (
          <div>
            <EventCard
              key={id}
              title={title}
              subTitle={subTitle}
              color={color}
              icon={<PlusIcon />}
              border={false}
              borderBottom={true}
            />
          </div>
        ))}
    </ul>
  );
}
