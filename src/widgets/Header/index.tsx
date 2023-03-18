import React, { Component } from 'react';
import { Input, NavLink } from '../../shared/ui';
import s from './style.module.css';

export class Header extends Component {
  render() {
    return (
      <nav className={s.nav}>
        <NavLink title="Home" link="/" />
        <NavLink title="About Us" link="/about" />
        <Input placeholder="Поиск..." />
      </nav>
    );
  }
}
