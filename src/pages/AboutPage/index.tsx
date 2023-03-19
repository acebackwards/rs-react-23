import React, { Component } from 'react';
import s from './style.module.css';

export class AboutPage extends Component {
  render() {
    return (
      <div>
        <div className={s.block}>
          <div className={s.container}>
            <h3>Contacts</h3>
            <div className={s.items}>
              <div>
                Telegram: <span>@acebackwards</span>
              </div>
              <div>
                E-mail: <span>acebackwardsbusiness@gmail.com</span>
              </div>
              <div>
                GitHub: <a href="https://github.com/acebackwards">acebackwards</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
