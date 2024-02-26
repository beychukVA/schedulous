import React from "react";
import Container from "~/components/Container";
import Button from "~/components/Button";
import Authentication from "~/layouts/Authentication";
import Form from "~/components/Form";
import paths from "~/paths";
import USER_CREATE_MUTATION from "./Mutation";

export default function Signup() {
  const handleSubmit = () => {
    window.location.href = paths.dashboard();
  };

  console.log(USER_CREATE_MUTATION);

  return (
    <Authentication>
      <Container.Small>
        <Form.Mutation
          data-track="signup"
          mutation={USER_CREATE_MUTATION}
          onSubmit={handleSubmit}
        >
          <Form.Input name="accountName" label="Business Name" />
          <Form.Input name="name" label="Your Name" />
          <Form.Input
            name="email"
            label="Your Best Email"
            control={Form.Email}
          />
          <Form.Input
            name="password"
            label="Password"
            control={Form.Password}
          />
          <Button type="submit" title="Sign Up" />
        </Form.Mutation>
      </Container.Small>
    </Authentication>
  );
}
