import * as React from "react";
import Status from "./Status";
import SubmitButton from "./SubmitButton";
import styles from "./styles.module.scss";

interface IProps {
  submittingText?: string | false;
  successText?: string | false;
  label?: string;
  disabled?: boolean;
  className?: string;
  "data-test"?: string;
  children?: React.ReactNode;
}

export default function Buttons({
  submittingText,
  successText,
  label,
  disabled,
  className,
  children,
  ...props
}: IProps) {
  return (
    <div className={styles.buttons}>
      <SubmitButton
        disabled={disabled}
        label={label}
        className={className}
        data-track={null}
        data-test={props["data-test"]}
      />
      {submittingText !== false && (
        <Status submittingText={submittingText} successText={successText} />
      )}
      {children && <div className={styles.aside}>{children}</div>}
    </div>
  );
}
