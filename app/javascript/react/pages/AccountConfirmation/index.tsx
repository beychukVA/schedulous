import React, { useState } from "react";
import { useNavigate } from "react-router";

import Container from "~/components/Container";
import Button from "~/components/Button";
import Authentication from "~/layouts/Authentication";
import Form from "~/components/Form";
import USER_FORGOT_PASSWORD_IN_MUTATION from "./Mutation";
import paths from "~/paths";

let formObj;
export default function AccountConfirmation() {
  const navigate = useNavigate();
  const [isConfirmSuccess, setIsConfirmSucess] = useState(false)
  const setFormObj = (f) => {
    formObj = f;
  };

  const handleSubmit = () => {
    setIsConfirmSucess(true)
  };

  return (
    <Authentication>
      <Container.Small>
        {
          !isConfirmSuccess ?
          <Form.Mutation
            data-track="accountConfirmation"
            mutation={USER_FORGOT_PASSWORD_IN_MUTATION}
            onSubmit={handleSubmit}
            setFormObj={setFormObj}
          >
            <Form.Input name="email" label="Email" control={Form.Email} />

            <Button type="submit" title="Account Confirmation" />
          </Form.Mutation>
          : <a>Confirmation URL Sent To Your Email</a>
        }
        <div style={{cursor: 'pointer'}}>
          <a onClick={() => { navigate(paths.login())}}>Back To Login</a>
        </div>
      </Container.Small>
    </Authentication>
  );
}
