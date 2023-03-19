import React, { Component } from 'react';
import s from './style.module.css';

export class ErrorPage extends Component {
  render() {
    return (
      <div className={s['error-page']}>
        <div className={s['error-container']}>
          <h2 className={s.error}>404</h2>
          <p className={s.title}>Page not found!</p>
          <p className={s.description}>
            Sorry, but the URL you were trying to redirect is not available...
          </p>
        </div>
      </div>
    );
  }
}
