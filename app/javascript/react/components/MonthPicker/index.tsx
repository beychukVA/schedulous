import React, { useEffect, useState } from "react";
import Form from "~/components/Form";
import styles from "./styles.module.scss";
import { format, addMonths, getYear } from "date-fns";

interface IMonthOption {
  value: string;
  label: string;
}

interface IProps {
  mr?: boolean;
  mb?: boolean;
  label: string;
  className?: string;
  defaultValue: string;
  onChangeIndex: (index: number) => void;
  onChangeValue: (month: string) => void;
}

export default function MonthPicker({
  mr,
  mb,
  label,
  className,
  defaultValue,
  onChangeIndex,
  onChangeValue,
}: IProps) {
  const options: IMonthOption[] = [];
  const year = getYear(new Date());

  for (let i = 0; i < 12; i++) {
    let month = format(addMonths(year, i), "MMMM");
    options.push({
      value: month,
      label: month,
    });
  }

  const getOptionId = (month) => {
    return options.findIndex((option) => option.value === month);
  };

  const handleChangeOption = (value) => {
    onChangeIndex(getOptionId(value));
    onChangeValue(value);
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
