import React from "react";
import MessageCard from "./MessageCard";
import Message from "../../types/Message";

interface IProps {
  message: Message;
  onChange: (id: number) => void;
}

export default function MessageItem({ message, onChange }: IProps) {
  return (
    <li key={message.id}>
      {<MessageCard message={message} onChange={onChange} />}
    </li>
  );
}
