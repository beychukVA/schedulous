import React from "react";
import MessageItem from "./MessageItem";
import Message from "../types/Message";
import styles from "./styles.module.scss";

interface IProps {
  messages: Message[];
  onChange: (id: number) => void;
}

export default function MessageList({ messages, onChange }: IProps) {
  return (
    <>
      <ul className={styles.list}>
        {messages &&
          messages.map((message) => (
            <MessageItem
              key={message.id}
              message={message}
              onChange={onChange}
            />
          ))}
      </ul>
    </>
  );
}
