import React, { useState }  from "react";

import Container from "~/components/Container";
import Button from "~/components/Button";
import Authentication from "~/layouts/Authentication";
import Form from "~/components/Form";
import USER_FORGOT_PASSWORD_IN_MUTATION from "./Mutation";

let formObj;
export default function ForgotPassword() {
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false)
  const setFormObj = (f) => { formObj = f }

  const handleSubmit = (value, form) => {
    setIsSubmitSuccess(true)
  };

  return (
    <Authentication>
      <Container.Small>
        {
          !isSubmitSuccess ?
          <Form.Mutation
            data-track="forgotPassword"
            mutation={USER_FORGOT_PASSWORD_IN_MUTATION}
            onSubmit={handleSubmit}
            setFormObj={setFormObj}
          >

            <Form.Input
              name="email"
              label="Email"
              control={Form.Email}
            />

            <Button type="submit" title="Forgot Password" />
          </Form.Mutation> : <>Reset Password URL Sent To Your Email</>
        }
      </Container.Small>
    </Authentication>
  );
}
