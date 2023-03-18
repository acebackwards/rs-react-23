import React, { Component } from 'react';
import { NavLink } from '../../shared/ui';
import s from './style.module.css';

export class Header extends Component {
  render() {
    return (
      <nav className={s.nav}>
        <div className={s.current}>Current Page</div>
        <div className={s.project}>Project Name</div>
        <div>
          <NavLink title="Home" link="/" />
          <NavLink title="About Us" link="/about" />
        </div>
      </nav>
    );
  }
}
