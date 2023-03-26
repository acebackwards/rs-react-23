import React, { Component } from 'react';
import s from './style.module.css';

type FormCardProps = {
  title: string;
  type: string;
  date: string;
  img: string;
  author: boolean;
  gender: boolean;
};

export class FormCard extends Component<FormCardProps> {
  recognizeType() {
    switch (this.props.type) {
      case '1':
        return 'Funny';
      case '2':
        return 'Smart';
      case '3':
        return 'Science';
      case '4':
        return 'IT';
    }
  }

  render() {
    return (
      <div className={s.card}>
        <div className={s['image-container']}>
          <img src={this.props.img} alt="" />
        </div>
        <div className={s['description-container']}>
          <div>
            <h3>{this.props.title}</h3>
          </div>
          <div className={s.description}>
            <div className={s.type}>{this.recognizeType()}</div>
            <div className={s.date}>{this.props.date}</div>
          </div>
          <div className={s.author}>
            <span>Usage Rights:</span> {this.props.author ? 'Yes' : 'No'}
          </div>
          <div className={s.author}>Created by {this.props.gender ? 'Male' : 'Female'}</div>
        </div>
      </div>
    );
  }
}
