import React from 'react';
import s from './style.module.css';

type FormCardProps = {
  title: string;
  type: string;
  date: string;
  img: string;
  author: boolean;
  gender: string;
};

export const FormCard = (props: FormCardProps) => {
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
        <img src={props.img} alt="" />
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
          <span>Is developer:</span> {props.author ? 'Yes' : 'No'}
        </div>
        <div className={s.author}>Created by {props.gender}</div>
      </div>
    </div>
  );
};
