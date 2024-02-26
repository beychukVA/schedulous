import React from "react";
import Form from "~/components/Form";

export default function UserForm() {
  return (
    <>
      <Form.Input label="Email" name="user.email" />
      <Form.Input label="Phone" name="user.phone" />
      <Form.Input
        name="user.skipPassword"
        label={false}
        defaultValue="1"
        control={Form.Hidden}
      />
    </>
  );
}
