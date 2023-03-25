import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.css';

export class Header extends Component {
  state = {
    currentLocation: 'Home',
  };

  current() {
    const currentUrl = window.location.href;
    return currentUrl.endsWith('/')
      ? 'Home'
      : currentUrl.endsWith('/about')
      ? 'About Us'
      : currentUrl.endsWith('/form')
      ? 'Forms'
      : 'Error';
  }

  render() {
    return (
      <nav className={s.nav}>
        <div className={s.project}>RS School</div>
        <div className={s.current}>{this.current()}</div>

        <div>
          <NavLink to={'/'} onClick={() => this.setState({ currentLocation: 'Home' })}>
            Home
          </NavLink>
          <NavLink to={'/about'} onClick={() => this.setState({ currentLocation: 'About Us' })}>
            About Us
          </NavLink>
          <NavLink to={'/form'} onClick={() => this.setState({ currentLocation: 'Forms' })}>
            Forms
          </NavLink>
        </div>
      </nav>
    );
  }
}
