import React, { InputHTMLAttributes } from 'react';
import styles from '../styles.module.scss';
import classNames from 'classnames';

type IProps = InputHTMLAttributes<HTMLInputElement>;

export default function TextInput({ className, ...props }: IProps) {
  return (
    <input
      type="text"
      className={classNames(styles.control, className)}
      {...props}
    />
  );
}
