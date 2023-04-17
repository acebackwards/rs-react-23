import React, { FC } from 'react';
import { Card } from '../../entities/ui';

import style from './style.module.css';
import { cardApi } from '../../app/services/CardService';
import { ICard } from '../../app/models/ICard';

interface CardContainer {
  searchName: string | '';
}

export const CardContainer: FC<CardContainer> = ({ searchName }) => {
  const { data: cards, isLoading, error } = cardApi.useFetchAllCardsQuery(searchName);

  if (isLoading) {
    return <div>It`s loading...</div>;
  } else {
    return (
      <>
        {/* TODO: if you want show card amount then uncomment below */}
        {/* <h3>Card amount: {cards && cards.info.count}</h3> */}
        {error ? (
          <h3>Nothing was found...</h3>
        ) : (
          <div className={style.container}>
            {cards &&
              cards.results.map((item: ICard) => {
                return <Card key={item.id} item={item} />;
              })}
          </div>
        )}
      </>
    );
  }
};
