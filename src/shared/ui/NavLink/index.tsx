import React, { Component } from 'react';
import s from './style.module.css';

type LinkProps = {
  link: string;
  title: string;
};

export class NavLink extends Component<LinkProps> {
  render() {
    return (
      <a className={s.a} href={this.props.link}>
        {this.props.title}
      </a>
    );
  }
}
