import React, { Component } from 'react';
import s from './style.module.css';

type ButtonProps = {
  title: string;
  type?: ButtonType;
  className?: string;
};

type ButtonType = 'button' | 'submit';

export class Button extends Component<ButtonProps> {
  render() {
    return (
      <button type={this.props.type || 'button'} className={s.button + ' ' + this.props.className}>
        {this.props.title}
      </button>
    );
  }
}
