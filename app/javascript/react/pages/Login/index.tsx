import React, { useState } from "react";
import { graphql } from "react-apollo";
import { useNavigate } from "react-router";

import Container from "~/components/Container";
import Button from "~/components/Button";
import Authentication from "~/layouts/Authentication";
import Form from "~/components/Form";
import paths from "~/paths";
import USER_SIGN_IN_MUTATION from "./Mutation";
import Autocomplete from "~/components/Form/Controls/Autocomplete";
import ACCOUNTS_SEARCH_QUERY from "./Query";

let formObj;
const Login = ({ data }) => {
  const setFormObj = (f) => {
    formObj = f;
  };
  const navigate = useNavigate();
  const [isDisabledInputs, setIsDisabledInputs] = useState(true);

  const handleSubmit = (value, form) => {
    window.location.href = paths.dashboard();
  };

  const handleChange = async (event) => {
    data.refetch({ name: event.target.value });
    formObj.change("accountId", null);
  };

  const businesses = (data.accountsSearch || []).map((account) => {
    return {
      id: account.id,
      title: account.name,
    };
  });

  const handleSelectAccount = (newResult) => {
    formObj.change("accountId", newResult.id);
  };

  const onChangeFormInputs = (state) => {
    setIsDisabledInputs(!state.values.accountId);
  };

  return (
    <Authentication>
      <Container.Small>
        <Form.Mutation
          data-track="signup"
          mutation={USER_SIGN_IN_MUTATION}
          onSubmit={handleSubmit}
          setFormObj={setFormObj}
        >
          <Form.Spy onChange={onChangeFormInputs} />

          <Autocomplete
            label="Business name"
            onChange={(newResult) => handleChange(newResult)}
            data={businesses}
            onSelect={handleSelectAccount}
          />

          <Form.Input
            name="email"
            label="Email"
            control={Form.Email}
            disabled={isDisabledInputs}
          />

          <Form.Input
            name="password"
            label="Password"
            control={Form.Password}
            disabled={isDisabledInputs}
          />
           <div style={{cursor: 'pointer'}}>
            <a onClick={() => { navigate(paths.forgotPassword())}}>Forgot Password</a>
          </div>

          <Button type="submit" title="Log In" />
        </Form.Mutation>
      </Container.Small>
    </Authentication>
  );
};

export default graphql(ACCOUNTS_SEARCH_QUERY)(Login);
