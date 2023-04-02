import React from 'react';

import s from './style.module.css';

type InputProps = {
  placeholder: string;
  defaultValue: string;
  onChange: (e: { target: { value: string } }) => void;
};

export const Input = (props: InputProps) => {
  return (
    <label className={s.label}>
      <input
        className={s.input}
        placeholder={props.placeholder || 'Search...'}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        type="text"
      />
    </label>
  );
};
