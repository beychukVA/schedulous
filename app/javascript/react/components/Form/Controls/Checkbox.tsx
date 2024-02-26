import * as React from 'react';
import classNames from "classnames";

import styles from '../styles.module.scss';

export default function CheckboxInput({ className, ...props }: any) {

  return (
    <div>
      <label>
      <input type="checkbox" {...props}/>
      <span className={classNames(className, styles.btnCheckbox, { [styles.isChecked]: props.checked })}>{props.label}</span>
    </label>
    </div>
  )
}

CheckboxInput.isBoolean = true;
