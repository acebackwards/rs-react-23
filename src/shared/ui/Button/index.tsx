import React from 'react';
import s from './style.module.css';

type ButtonProps = {
  title: string;
  type?: ButtonType;
  className?: string;
};

type ButtonType = 'button' | 'submit';

export const Button = (props: ButtonProps) => {
  return (
    <button type={props.type || 'button'} className={s.button + ' ' + props.className}>
      {props.title}
    </button>
  );
};
