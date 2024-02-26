import classNames from "classnames";
import React from "react";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader/ChatHeader";
import styles from "./styles.module.scss";

const chatMessages = [
  {
    sender: {
      avatar:
        "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
      name: "BOT",
      time: "8:45pm",
    },
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    sender: {
      avatar:
        "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
      name: "Jamie Smith",
      time: "8:45pm",
    },
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    sender: {
      avatar:
        "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
      name: "BOT",
      time: "8:45pm",
    },
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    sender: {
      avatar:
        "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
      name: "Jamie Smith",
      time: "8:45pm",
    },
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    sender: {
      avatar:
        "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
      name: "Jamie Smith",
      time: "8:45pm",
    },
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    sender: {
      avatar:
        "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
      name: "BOT",
      time: "8:45pm",
    },
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    sender: {
      avatar:
        "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
      name: "Jamie Smith",
      time: "8:45pm",
    },
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    sender: {
      avatar:
        "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
      name: "BOT",
      time: "8:45pm",
    },
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    sender: {
      avatar:
        "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
      name: "Jamie Smith",
      time: "8:45pm",
    },
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    sender: {
      avatar:
        "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
      name: "BOT",
      time: "8:45pm",
    },
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];

interface IProps {
  collapsed: boolean;
  onChangeCollapsed: () => void;
}

export default function Chat({ collapsed, onChangeCollapsed }: IProps) {
  return (
    <div
      className={classNames(styles.container, {
        [styles.collapsed]: collapsed,
      })}
    >
      <ChatHeader
        title="Jamie Smith"
        collapsed={collapsed}
        onChangeCollapsed={onChangeCollapsed}
      />
      <ChatBody messages={chatMessages} />
      <ChatFooter />
    </div>
  );
}
