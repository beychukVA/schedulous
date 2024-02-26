import React, { InputHTMLAttributes } from "react";

type IProps = InputHTMLAttributes<HTMLInputElement>;

export default function HiddenInput({ className, ...props }: IProps) {
  return <input type="hidden" {...props} />;
}
