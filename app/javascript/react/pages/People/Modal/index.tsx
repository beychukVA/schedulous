import React from "react";

import Modal from "~/components/Modal";
import PeopleForm from "./PeopleForm";
import MembershipForm from "./MembershipForm";

export default function PeopleModal({ isOpen, setModalIsOpen }) {
  const [formState, setFormState] = React.useState("PEOPLE");
  const [subtitle, setSubtitle] = React.useState("");
  const [isVisibleConfirmMembership, setIsVisibleConfirmMembership] =
    React.useState(false);
  const [today, setToday] = React.useState("");
  const [membership, setMembership] = React.useState("");

  let title = "";
  if (formState == "PEOPLE") {
    title = "Create Person";
  } else {
    if (isVisibleConfirmMembership) {
      title = "Confirm Membership";
    } else {
      title = "Create Membership";
    }
  }

  const handleSubmit = (e) => {
    window.location.href = "/people";
    // if(formState == "PEOPLE") {
    //   if(e.person.name) {
    //     setSubtitle(e.person.name)
    //   }
    //   setFormState("MEMBERSHIP")
    // } else {
    //   if(!isVisibleConfirmMembership) {
    //     setIsVisibleConfirmMembership(true)
    //     setToday(e.today)
    //     setMembership(e.selectMembership)
    //   } else {
    //     setIsVisibleConfirmMembership(false)
    //     setFormState("PEOPLE")
    //     setSubtitle("")
    //     setModalIsOpen(false)
    //     setToday("")
    //     setMembership("")
    //   }
    // }
  };

  const onClose = () => {
    setModalIsOpen(false);
    setFormState("PEOPLE");
    setSubtitle("");
    setIsVisibleConfirmMembership(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} subtitle={subtitle}>
      {formState == "PEOPLE" && <PeopleForm handleSubmit={handleSubmit} />}
      {formState == "MEMBERSHIP" && (
        <MembershipForm
          handleSubmit={handleSubmit}
          isVisibleConfirmMembership={isVisibleConfirmMembership}
          today={today}
          membership={membership}
        />
      )}
    </Modal>
  );
}
