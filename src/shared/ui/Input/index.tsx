import React, { Component } from 'react';

import s from './style.module.css';

type InputProps = {
  placeholder: string;
};

export class Input extends Component<InputProps> {
  state = {
    data: '',
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ data: e.currentTarget.value });
  };

  componentDidMount() {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      this.setState({ data: storedData });
    }
  }

  componentWillUnmount() {
    localStorage.setItem('data', this.state.data);
  }

  render() {
    return (
      <label className={s.label}>
        <input
          className={s.input}
          placeholder={this.props.placeholder || 'Search...'}
          value={this.state.data}
          onChange={this.handleChange}
          type="text"
        />
      </label>
    );
  }
}
