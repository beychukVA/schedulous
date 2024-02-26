import React from "react";
import Modal from "~/components/Modal";
import EventTemplate from "./EventTemplate";
import IModalData from "./types/Data";
import styles from "./styles.module.scss";
interface IProps {
  isOpen: boolean;
  setModalIsOpen: (isOpen: boolean) => void;
  title: string;
  subtitle: string;
  favorite?: boolean;
  data: IModalData;
}

export default function ClassModal({
  isOpen,
  setModalIsOpen,
  title,
  subtitle,
  favorite,
  data,
}: IProps) {
  const handleSubmit = (e) => {};
  const onClose = () => {
    setModalIsOpen(false);
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      subtitle={subtitle}
      favorite={favorite}
    >
      <EventTemplate data={data} />
    </Modal>
  );
}
