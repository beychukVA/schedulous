import React, { useState } from "react";
import Form from "~/components/Form";
import MessageList from "./MessagesList";
import styles from "./styles.module.scss";
import Message from "./types/Message";

const messagesArr: Message[] = [
  {
    id: 1,
    avatar:
      "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
    title: "Michael Landon",
    subTitle: "What time on Sunday?",
    favorite: false,
  },
  {
    id: 2,
    avatar:
      "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
    title: "Michael Landon",
    subTitle: "What time on Sunday?",
    favorite: false,
  },
  {
    id: 3,
    avatar:
      "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
    title: "Michael Landon",
    subTitle: "What time on Sunday?",
    favorite: true,
  },
  {
    id: 4,
    avatar:
      "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
    title: "Michael Landon",
    subTitle: "What time on Sunday?",
    favorite: false,
  },
  {
    id: 5,
    avatar:
      "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
    title: "Michael Landon",
    subTitle: "What time on Sunday?",
    favorite: false,
  },
  {
    id: 6,
    avatar:
      "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
    title: "Michael Landon",
    subTitle: "What time on Sunday?",
    favorite: false,
  },
  {
    id: 7,
    avatar:
      "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
    title: "Michael Landon",
    subTitle: "What time on Sunday?",
    favorite: false,
  },
  {
    id: 8,
    avatar:
      "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
    title: "Michael Landon",
    subTitle: "What time on Sunday?",
    favorite: false,
  },
  {
    id: 9,
    avatar:
      "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
    title: "Michael Landon",
    subTitle: "What time on Sunday?",
    favorite: false,
  },
  {
    id: 10,
    avatar:
      "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
    title: "Michael Landon",
    subTitle: "What time on Sunday?",
    favorite: false,
  },
];

export default function Search() {
  const [messages, setMessages] = useState(messagesArr);

  const handleChangeFavoriteMessage = (id: number) => {
    setMessages((prev) => {
      return prev.map((message) => {
        if (message.id === id) {
          return {
            ...message,
            favorite: !message.favorite,
          };
        }
        return message;
      });
    });
  };
  return (
    <div className={styles.container}>
      <Form.Text placeholder="Search inbox" name="search" />
      <MessageList messages={messages} onChange={handleChangeFavoriteMessage} />
    </div>
  );
}
