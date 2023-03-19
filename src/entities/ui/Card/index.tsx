import React, { Component } from 'react';
import s from './style.module.css';

type CardProps = {
  name: string;
  status: string;
  species: string;
  img: string;
  location: string;
};

export class Card extends Component<CardProps> {
  render() {
    return (
      <div className={s.card}>
        <div className={s['image-container']}>
          <img src={this.props.img} alt="" />
        </div>
        <div className={s['description-container']}>
          <div>
            <h3>{this.props.name}</h3>
          </div>
          <div className={s.description}>
            <div className={s.type}>{this.props.species}</div>
            <div className={s.status}>{this.props.status}</div>
          </div>
          <div className={s.location}>
            <span>Location:</span> {this.props.location}
          </div>
        </div>
      </div>
    );
  }
}
