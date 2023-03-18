import React, { Component } from 'react';

import s from './style.module.css';

type InputProps = {
  placeholder: string;
};

export class Input extends Component<InputProps> {
  render() {
    return (
      <label className={s.label}>
        <input
          className={s.input}
          placeholder={this.props.placeholder || 'Search...'}
          type="text"
        />
      </label>
    );
  }
}
