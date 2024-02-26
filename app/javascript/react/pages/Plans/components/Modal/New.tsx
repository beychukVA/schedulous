import React from "react";
import PlanForm from "./PlanForm";
import Modal from "~/components/Modal";

interface IProps {
  isOpen: boolean;
  onSubmit: () => void;
  onClose: () => void;
}

export default function PlanNewModal({ isOpen, onSubmit, onClose }: IProps) {
  return (
    <Modal isOpen={isOpen} title="Plans" onSubmit={onSubmit} onClose={onClose}>
      <PlanForm onSubmit={onSubmit} />
    </Modal>
  );
}
