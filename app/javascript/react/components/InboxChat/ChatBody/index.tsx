import React from "react";
import ChatMessage from "./ChatMessage";
import Sender from "./types/Sender";
import styles from "./styles.module.scss";

interface IChatMessage {
  sender: Sender;
  text: string;
}

interface IProp {
  messages: IChatMessage[];
}

export default function ChatBody({ messages }: IProp) {
  return (
    <div className={styles.container}>
      {messages &&
        messages.map(({ sender, text }) => {
          const { avatar, name, time } = sender;
          return (
            <ChatMessage text={text} avatar={avatar} time={time} name={name} />
          );
        })}
    </div>
  );
}
