import React from "react";
import { IEvent } from "../../types/Events";
import EventCard from "~/components/EventCard/EventCard";
import styles from "./styles.module.scss";
import EditIcon from "~/icons/Edit";

interface IProps {
  events: IEvent[];
  onClick: (id: string | number) => void;
}

export default function Events({ events, onClick }: IProps) {
  return (
    <ul className={styles.container}>
      {events &&
        events.map(({ id, title, subTitle, color }) => (
          <EventCard
            key={id}
            id={id}
            title={title}
            subTitle={subTitle}
            color={color}
            icon={<EditIcon />}
            onClick={onClick}
          />
        ))}
    </ul>
  );
}
