import * as React from "react";
import ControlText from "./Controls/Text";
import ControlCheckbox from "./Controls/Checkbox";
import Font from "~/components/Font";
import classNames from "classnames";
import styles from "./styles.module.scss";
import Flex from "~/components/Flex";
import { Field as FinalFormField } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
import { capitalize } from "lodash";

interface IProps<T> {
  name: string;
  label?: React.ReactNode | string | false;
  className?: string;
  control?: T;
  placeholder?: string | null;
  defaultValue?: string | null;
  hint?: string;
  description?: string;
  id?: string;
  maxLength?: number;
  controlClassName?: string | null;
}

export default function Field<T>({
  control,
  ...props
}: IProps<T> &
  Omit<PropsOf<T>, "onChange" | "value" | "defaultValue" | "fields">) {
  const Control: any = control || ControlText;
  const type = Control.name === ControlCheckbox.name ? "checkbox" : undefined;
  const Component: any = Control.isArray ? FieldArray : FinalFormField;

  return (
    <Component component={FieldRow} control={Control} type={type} {...props} />
  );
}

function FieldRow<T>({
  className,
  label,
  control: Control,
  id,
  input,
  fields,
  description,
  hint,
  meta,
  maxLength,
  controlClassName,
  ...inputProps
}: IProps<T> & { input: any; fields: any; meta: any; control: any }) {
  const name = input ? input.name : fields.name;
  const error = meta.error || meta.submitError;

  id = id || `form-${name}`;
  label =
    label === "undefined" || label === false
      ? false
      : label || capitalize(name);

  const control = fields ? (
    <Control
      fields={fields}
      id={id}
      className={controlClassName}
      {...inputProps}
    />
  ) : (
    <Control id={id} {...input} className={controlClassName} {...inputProps} />
  );

  if (Control.isBoolean) {
    return (
      <div className={classNames(styles.fieldBoolean, className)}>
        {control}
        {error && (
          <Font className={styles.error}>{humanizeErrorMessage(error)}</Font>
        )}
        {label && (
          <label htmlFor={id} className={styles.status}>
            {label}
          </label>
        )}
      </div>
    );
  }

  return (
    <div className={classNames(styles.field, className)}>
      {(label || error) && (
        <div className={styles.labelLine}>
          {label &&
            (description ? (
              <label htmlFor={id}>
                <Font block={true}>{label}</Font>
                {description}
              </label>
            ) : (
              <Font component="label" htmlFor={id}>
                {label}
              </Font>
            ))}
          {error && <Font>{humanizeErrorMessage(error)}</Font>}
        </div>
      )}
      <div>{control}</div>
      <Flex.Row justify="space-between" align="flex-end">
        {hint && <Font size="small">{hint}</Font>}
        <LengthMessage input={input} maxLength={maxLength} />
      </Flex.Row>
    </div>
  );
}

const MESSAGE: any = {
  invalid: "is invalid",
  too_short: "is too short",
};

function humanizeErrorMessage(message: string): string {
  return MESSAGE[message] || message;
}

function LengthMessage({
  input,
  maxLength,
}: {
  input?: any;
  maxLength?: number;
}) {
  if (maxLength === undefined) return null;

  const currentLenght = input?.value.length;
  const color = currentLenght > maxLength ? "error" : "grey";
  const bold = currentLenght > maxLength;

  return (
    <Font className={styles.lengthMessage} block={false} bold={bold}>
      {currentLenght}/{maxLength}
    </Font>
  );
}
