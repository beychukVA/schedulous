import * as React from "react";
import classNames from "classnames";
import { Field as FinalFormField, useFormState } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
import { capitalize } from "lodash";

import ControlText from "./Controls/Text";
import ControlCheckbox from "./Controls/Checkbox";
import styles from "./styles.module.scss";

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
  noMargin?: boolean;
  options?: Array<T>;
  allowNull?: boolean;
  parse?: (value) => string | null | undefined;
  path?: string;
}

export default function Field<T>({
  control,
  allowNull = true,
  parse,
  ...props
}: IProps<T> &
  Omit<PropsOf<T>, "onChange" | "value" | "defaultValue" | "fields">) {
  const Control: any = control || ControlText;
  const type = Control.name === ControlCheckbox.name ? "checkbox" : undefined;
  const Component: any = Control.isArray ? FieldArray : FinalFormField;

  return (
    <Component
      component={FieldRow}
      control={Control}
      type={type}
      parse={(value) => {
        let result = value;

        if (parse) {
          result = parse(result);
        } else {
          if (result === "" && allowNull) {
            result = null
          };
        }

        return result;
      }}
      {...props}
    />
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
  path,
  ...inputProps
}: IProps<T> & { input: any; fields: any; meta: any; control: any }) {
  const name = input ? input.name : fields.name;
  const { submitErrors } = useFormState();
  const error = meta.error || meta.submitError || path && submitErrors && submitErrors[path];
  const [currentValue, setCurrentValue] = React.useState(input.value);
  const [active, setActive] = React.useState(false);
  const noMargin = inputProps.noMargin;

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
    <Control
      id={id}
      {...input}
      className={controlClassName}
      onFocus={() => setActive(true)}
      label={label}
      onBlur={() => setActive(false)}
      onChange={(e: any) => {
        setCurrentValue(e.target.value);
        input.onChange(e);
      }}
      {...inputProps}
    />
  );

  if (Control.isBoolean) {
    return (
      <div className={classNames(styles.fieldBoolean, className)}>
        {control}
        {error && (
          <div className={styles.error}>{humanizeErrorMessage(error)}</div>
        )}
        {/* {label && (
          <label htmlFor={id} className={styles.status}>
            {label}
          </label>
        )} */}
      </div>
    );
  }

  return (
    <div
      className={classNames(styles.input, {
        [styles.inputFilled]: currentValue && !active && !error,
        [styles.inputError]: error,
        [styles.inputNomargin]: noMargin,
        [styles.inputFocused]: active && !error,
      })}
    >
      {(label || error) && (
        <div className={styles.label}>
          {label &&
            (description ? (
              <label htmlFor={id}>
                <div>{label}</div>
                {description}
              </label>
            ) : (
              <label htmlFor={id}>{label}</label>
            ))}
        </div>
      )}
      <div>{control}</div>
      {error && (
        <div className={styles.error}>{humanizeErrorMessage(error)}</div>
      )}
      <div>{hint && <div>{hint}</div>}</div>
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
