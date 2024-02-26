import React from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router";

import Container from "~/components/Container";
import Button from "~/components/Button";
import Authentication from "~/layouts/Authentication";
import Form from "~/components/Form";
import USER_RESET_PASSWORD_MUTATION from "./Mutation";
import paths from "~/paths";

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const resetPasswordToken = searchParams.get('reset_password_token')
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(paths.login());
  };


  return (
    <Authentication>
      <Container.Small>
        <Form.Mutation
          data-track="resetPassword"
          mutation={USER_RESET_PASSWORD_MUTATION}
          onSubmit={handleSubmit}
          mutationInput={(values) => {
            return {
              ...values,
              resetPasswordToken: resetPasswordToken
            }
          }}
        >

          <Form.Input
            name="password"
            label="New Password"
            control={Form.Password}
          />
          <Form.Input
            name="passwordConfirmation"
            label="Confirm Password"
            control={Form.Password}
          />

          <Button type="submit" title="Reset Password" />
        </Form.Mutation>
      </Container.Small>
    </Authentication>
  );
}

