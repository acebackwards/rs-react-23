import React, { Component } from 'react';
import s from './style.module.css';

export class Card extends Component {
  render() {
    return (
      <div className={s.card}>
        <div className={s['image-container']}>
          <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="" />
        </div>
        <div className={s['description-container']}>
          <div>
            <h3>Rick Sanchez</h3>
          </div>
          <div className={s.description}>
            <div className={s.type}>Human</div>
            <div className={s.status}>Alive</div>
          </div>
          <div className={s.location}>
            <span>Location:</span> Earth
          </div>
        </div>
      </div>
    );
  }
}
