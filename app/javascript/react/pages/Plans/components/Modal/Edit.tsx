import React from "react";
import PlanForm from "./PlanForm";
import Modal from "~/components/Modal";
import PLAN_QUERY from "./Query";
import createComponentWithQuery from "~/utils/createComponentWithQuery";

interface IProps {
  planId: number;
  isOpen: boolean;
  onSubmit: () => void;
  onClose: () => void;
}

export default function PlanNewModal({
  planId,
  isOpen,
  onSubmit,
  onClose,
}: IProps) {
  return (
    <Modal isOpen={isOpen} title="Plans" onClose={onClose}>
      <PlanFormWithQuery planId={planId} onSubmit={onSubmit} />
    </Modal>
  );
}

function PlanFormWithQuery({ planId, onSubmit }): any {
  return createComponentWithQuery({
    component: ({ plan }) => (
      <PlanForm planId={planId} initialValues={plan} onSubmit={onSubmit} />
    ),
    query: PLAN_QUERY,
    queryVariables: { id: planId },
  });
}
