import React from "react";
import Form from "~/components/Form";
import styles from "./styles.module.scss";
import { format, addYears, subYears } from "date-fns";

interface IYearOption {
  value: string;
  label: string;
}

interface IProps {
  mr?: boolean;
  mb?: boolean;
  label: string;
  className?: string;
  defaultValue: string;
  onChange: (year: string) => void;
}

export default function YearPicker({
  mr,
  mb,
  label,
  className,
  defaultValue,
  onChange,
}: IProps) {
  const options: IYearOption[] = [];

  for (let i = 0; i <= 10; i++) {
    let strYear = format(addYears(new Date(), i), "yyyy");
    options.push({ value: strYear, label: strYear });
  }

  const handleChangeOption = (value) => {
    onChange(value);
  };

  return (
    <Form.Select
      mr={mr}
      mb={mb}
      label={label}
      className={className}
      default={defaultValue}
      options={options}
      onChangeOption={handleChangeOption}
    />
  );
}
