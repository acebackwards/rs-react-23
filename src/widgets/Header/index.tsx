import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.css';

export class Header extends Component {
  state = {
    currentLocation: 'Home',
  };

  current() {
    const currentUrl = window.location.href;
    return currentUrl.endsWith('/') ? 'Home' : currentUrl.endsWith('/about') ? 'About Us' : 'Error';
  }

  render() {
    return (
      <nav className={s.nav}>
        <div className={s.current}>{this.current()}</div>
        <div className={s.project}>Project Name</div>
        <div>
          <NavLink to={'/'} onClick={() => this.setState({ currentLocation: 'Home' })}>
            Home
          </NavLink>
          <NavLink to={'/about'} onClick={() => this.setState({ currentLocation: 'About Us' })}>
            About Us
          </NavLink>
          {/* <NavLink to={'/error'} onClick={() => this.setState({ currentLocation: 'Error' })}>
            Error
          </NavLink> */}
        </div>
      </nav>
    );
  }
}
