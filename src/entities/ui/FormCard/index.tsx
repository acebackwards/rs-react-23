import React, { FC } from 'react';
import s from './style.module.css';
import { IFormCard } from 'app/models/IFormCard';

export const FormCard: FC<IFormCard> = (props) => {
  const recognizeType = () => {
    switch (props.type) {
      case '1':
        return 'Funny';
      case '2':
        return 'Smart';
      case '3':
        return 'Science';
      case '4':
        return 'IT';
    }
  };

  return (
    <div className={s.card}>
      <div className={s['image-container']}>
        <img src={props.image} alt="" />
      </div>
      <div className={s['description-container']}>
        <div>
          <h3>{props.title}</h3>
        </div>
        <div className={s.description}>
          <div className={s.type}>{recognizeType()}</div>
          <div className={s.date}>{props.date}</div>
        </div>
        <div className={s.author}>
          <span>Is developer:</span> {props.developer ? 'Yes' : 'No'}
        </div>
        <div className={s.author}>Created by {props.gender}</div>
      </div>
    </div>
  );
};
