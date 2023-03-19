import React, { Component } from 'react';
import s from './style.module.css';

type ButtonProps = {
  title: string;
};

export class Button extends Component<ButtonProps> {
  render() {
    return <button className={s.button}>{this.props.title}</button>;
  }
}
