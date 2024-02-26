import React from "react";
import Form from "~/components/Form";
import styles from "./styles.module.scss";
import { getDaysInMonth } from "date-fns";

interface IDayOption {
  value: string;
  label: string;
}

interface IProps {
  mr?: boolean;
  mb?: boolean;
  label: string;
  className?: string;
  defaultValue: string;
  year: string;
  month: number;
  onChange: (day: string) => void;
}

export default function DayPicker({
  mr,
  mb,
  label,
  className,
  defaultValue,
  year = "2022",
  month = 0,
  onChange,
}: IProps) {
  const options: IDayOption[] = [];
  const days = getDaysInMonth(new Date(Number(year), month));

  for (let i = 1; i <= days; i++) {
    let strDay = String(i);
    options.push({ value: strDay, label: strDay });
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
