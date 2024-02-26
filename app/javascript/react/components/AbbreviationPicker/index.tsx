import React from "react";
import Form from "~/components/Form";
import styles from "./styles.module.scss";

interface IAbbreviationOption {
  value: string;
  label: string;
}

interface IProps {
  mr?: boolean;
  mb?: boolean;
  label: string;
  className?: string;
  defaultValue: string;
  onChange: (abbreviation: string) => void;
}

export default function AbbreviationPicker({
  mr,
  mb,
  label,
  className,
  defaultValue,
  onChange,
}: IProps) {
  const options: IAbbreviationOption[] = [
    {
      value: "AM",
      label: "AM",
    },
    {
      value: "PM",
      label: "PM",
    },
  ];

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
