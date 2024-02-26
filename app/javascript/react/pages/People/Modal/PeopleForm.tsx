import React from "react";

import Form from "~/components/Form";
import { createPerson } from "~/api/people";
import Button from "~/components/Button";
import CheckToggle, { ICheckToggleItem } from "~/components/CheckToggle";
import Person from "~/icons/toggle/Person";
import People from "~/icons/toggle/People";
import UserForm from "./UserForm";
import PersonForm from "./PersonForm";
import PERSON_CREATE_MUTATION from "./Mutation";

const TOGGLE_ITEMS: ICheckToggleItem[] = [
  { title: "New User", icon: <Person />, key: "user" },
  { title: "Add to Family", icon: <People />, key: "person" },
];

export default function PeopleForm({ handleSubmit }) {
  const [currentToggle, setCurrentToggle] = React.useState("user");

  return (
    <>
      <Form.Mutation
        data-track="create-person"
        mutation={PERSON_CREATE_MUTATION}
        onSubmit={handleSubmit}
      >
        <Form.Input label="Name" name="name" />

        <CheckToggle
          items={TOGGLE_ITEMS}
          selectedKey={currentToggle}
          onChange={setCurrentToggle}
        />

        {currentToggle === "user" && <UserForm />}
        {currentToggle === "person" && <PersonForm />}
        <hr />
        <Button title="Create Person" type="submit" />
      </Form.Mutation>
    </>
  );
}
