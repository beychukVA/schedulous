import React from "react";
import Form from "~/components/Form";
import styles from "./styles.module.scss";

interface IHourOption {
  value: string;
  label: string;
}

interface IProps {
  mr?: boolean;
  mb?: boolean;
  label: string;
  className?: string;
  defaultValue: string;
  onChange: (hour: string) => void;
}

export default function HourPicker({
  mr,
  mb,
  label,
  className,
  defaultValue,
  onChange,
}: IProps) {
  const options: IHourOption[] = [];

  for (let i = 1; i <= 12; i++) {
    let strHour = i < 10 ? `0${i}` : i;
    options.push({ value: strHour.toString(), label: strHour.toString() });
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
