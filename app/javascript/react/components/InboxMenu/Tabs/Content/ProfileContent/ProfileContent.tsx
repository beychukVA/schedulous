import React, { useState } from "react";
import Events from "./Event/Events";
import History from "./History/History";
import Profile from "./Profile/Profile";
import styles from "./styles.module.scss";
import { IEvent } from "../types/Events";
import { IHistory } from "../types/History";
import { Response } from "~/components/AppointmentModal/types/Response";

const events: IEvent[] = [
  {
    id: 1,
    title: "Unlimited MMA",
    subTitle: "9/15/22 7:00am (1 hr)",
    color: "#936dff",
    favorite: true,
  },
  {
    id: 2,
    title: "VIP Tour - Coach Sara",
    subTitle: "9/15/22 8:00am (30m)",
    color: "#ff784b",
    favorite: false,
  },
];

const historys: IHistory[] = [
  {
    id: 1,
    title: "Unlimited MMA",
    subTitle: "9/15/22 7:00am (1 hr)",
    status: "Expired",
    color: "#936dff",
  },
  {
    id: 2,
    title: "VIP Tour - Coach Sara",
    subTitle: "9/15/22 8:00am (30m)",
    status: "Attended",
    color: "#ff784b",
  },
  {
    id: 3,
    title: "Unlimited MMA",
    subTitle: "9/15/22 7:00am (1 hr)",
    status: "Attended",
    color: "#ffc837",
  },
  {
    id: 4,
    title: "Unlimited MMA",
    subTitle: "9/15/22 7:00am (1 hr)",
    status: "No Show",
    color: "#936dff",
  },
  {
    id: 5,
    title: "VIP Tour - Coach Sara",
    subTitle: "9/15/22 8:00am (30m)",
    status: "Expired",
    color: "#ff784b",
  },
  {
    id: 6,
    title: "Unlimited MMA",
    subTitle: "9/15/22 7:00am (1 hr)",
    status: "No Show",
    color: "#ffc837",
  },
  {
    id: 7,
    title: "Unlimited MMA",
    subTitle: "9/15/22 7:00am (1 hr)",
    status: "No Show",
    color: "#936dff",
  },
  {
    id: 8,
    title: "VIP Tour - Coach Sara",
    subTitle: "9/15/22 8:00am (30m)",
    status: "Attended",
    color: "#ff784b",
  },
  {
    id: 9,
    title: "Unlimited MMA",
    subTitle: "9/15/22 7:00am (1 hr)",
    status: "No Show",
    color: "#ffc837",
  },
  {
    id: 10,
    title: "Unlimited MMA",
    subTitle: "9/15/22 7:00am (1 hr)",
    status: "Attended",
    color: "#ffc837",
  },
];

const ProfileData = {
  name: "Jamie Smith",
  email: "jamiesmith@gmail.com",
};

interface IProps {
  openModal: ({}: Response) => void;
}

export default function ProfileContent({ openModal }: IProps) {
  const [selectedEvent, setSelectedEvent] = useState<string | number>(0);

  const handleEditEvent = (id: string | number) => {
    setSelectedEvent(id);
    const [event] = events.filter((event) => event.id === id);
    openModal({
      isOpen: true,
      data: {
        event: event,
        profile: ProfileData,
        history: historys,
      },
    });
  };

  return (
    <div className={styles.container}>
      <Profile name={ProfileData.name} email={ProfileData.email} mb="large" />
      <div className={styles.content_container}>
        <Events events={events} onClick={handleEditEvent} />
        <History historys={historys} />
      </div>
    </div>
  );
}
