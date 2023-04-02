import React from 'react';
import s from './style.module.css';

type CardProps = {
  name: string;
  status: string;
  species: string;
  img: string;
  location: string;
};

export const Card = (props: CardProps) => {
  return (
    <div className={s.card}>
      <div className={s['image-container']}>
        <img src={props.img} alt="" />
      </div>
      <div className={s['description-container']}>
        <div>
          <h3>{props.name}</h3>
        </div>
        <div className={s.description}>
          <div className={s.type}>{props.species}</div>
          <div className={s.status}>{props.status}</div>
        </div>
        <div className={s.location}>
          <span>Location:</span> {props.location}
        </div>
      </div>
    </div>
  );
};
