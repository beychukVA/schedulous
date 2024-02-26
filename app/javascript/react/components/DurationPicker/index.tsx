import React from "react";
import Form from "~/components/Form";
import styles from "./styles.module.scss";

interface IDurationOption {
  value: string;
  label: string;
}

interface IProps {
  className?: string;
  mr?: boolean;
  mb?: boolean;
  label: string;
  defaultValue: string;
  onChange: (duration: string) => void;
}

export default function DurationPicker({
  className,
  mr,
  mb,
  label,
  defaultValue,
  onChange,
}: IProps) {
  const options: IDurationOption[] = [];

  for (let i = 1; i <= 120; i++) {
    let strDuration = i < 10 ? `0${i}` : i;
    options.push({
      value: strDuration.toString(),
      label: strDuration.toString(),
    });
  }

  const handleChangeOption = (value) => {
    onChange(value);
  };

  return (
    <Form.Select
      className={className}
      mr={mr}
      mb={mb}
      label={label}
      default={defaultValue}
      options={options}
      onChangeOption={handleChangeOption}
    />
  );
}
