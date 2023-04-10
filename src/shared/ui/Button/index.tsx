import React from 'react';
import s from './style.module.css';

type ButtonProps = {
  title: string;
  type?: ButtonType;
  className?: string;
  id?: string;
};

type ButtonType = 'button' | 'submit';

export const Button = (props: ButtonProps) => {
  return (
    <button
      id={props.id || ''}
      type={props.type || 'button'}
      className={s.button + ' ' + props.className}
    >
      {props.title}
    </button>
  );
};
