import React, { useState, FC } from 'react';
import s from './style.module.css';
import { ICard } from 'app/models/ICard';

type CardProps = {
  item: ICard;
};

export const Card: FC<CardProps> = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <div className={s.modal}>
          <div className={s['modal__background']} onClick={() => setShowModal(false)} />
          <div className={s['modal__card']}>
            <div className={s['image-container']}>
              <img src={item.image} alt="" />
            </div>
            <div className={s['description-container']}>
              <div>
                <h3>{item.name}</h3>
              </div>
              <div className={s.description}>
                <div className={s.type}>{item.species}</div>
                <div className={s.status}>{item.status}</div>
              </div>
              <div className={s.location}>
                <span>Location:</span> {item.location.name}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={s.card} onClick={() => setShowModal(true)}>
        <div className={s['image-container']}>
          <img src={item.image} alt="" />
        </div>
        <div className={s['description-container']}>
          <div className={s['card__name']}>
            <h3>{item.name}</h3>
          </div>
        </div>
      </div>
    </>
  );
};
