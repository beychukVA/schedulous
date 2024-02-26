import React from "react";
import Form from "~/components/Form";
import styles from "./styles.module.scss";

interface IMinuteOption {
  value: string;
  label: string;
}

interface IProps {
  mr?: boolean;
  mb?: boolean;
  label: string;
  className?: string;
  defaultValue: string;
  onChange: (minute: string) => void;
}

export default function MinutePicker({
  mr,
  mb,
  label,
  className,
  defaultValue,
  onChange,
}: IProps) {
  const options: IMinuteOption[] = [];

  for (let i = 0; i < 60; i++) {
    let strMinute = i < 10 ? `0${i}` : i;
    options.push({ value: strMinute.toString(), label: strMinute.toString() });
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
