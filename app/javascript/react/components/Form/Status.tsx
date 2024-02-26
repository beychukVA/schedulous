import * as React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { FormSpy } from "react-final-form";

interface IProps {
  successText?: string | false;
  submittingText?: string;
}

export default function Status({ successText, submittingText }: IProps) {
  return (
    <FormSpy>
      {(form) => (
        <span
          className={classNames(styles.status, {
            [styles.errorStatus]: form.submitFailed,
          })}
        >
          {form.submitSucceeded &&
            successText !== false &&
            `👍 ${successText || "Updated!"}`}
          {form.submitting && `💾 ${submittingText || "Saving"}…`}
          {form.submitFailed && "🙀 Oh-oh! There has been an error…"}
        </span>
      )}
    </FormSpy>
  );
}

Status.defaultProps = {
  successText: false,
};
