import * as React from "react";
import { FormSpy } from "react-final-form";
import Button, { IProps as IButtonProps } from "~/components/Button";

interface IProps extends IButtonProps {
  label: string;
  disabled?: boolean;
}

export default function SubmitButton({
  label,
  disabled,
  ...otherButtonProps
}: IProps) {
  return (
    <FormSpy>
      {(form) => (
        <Button
          {...otherButtonProps}
          disabled={disabled || form.submitting}
          label={label + (form.submitting ? "..." : "")}
        />
      )}
    </FormSpy>
  );
}

SubmitButton.defaultProps = {
  ...Button.defaultProps,
  "data-test": "form-submit",
  label: "Submit",
  type: "submit",
  disabled: false,
};
