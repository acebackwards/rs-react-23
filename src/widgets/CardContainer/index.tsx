import React, { useEffect, useState } from 'react';
import { Card } from '../../entities/ui';

import style from './style.module.css';

interface Props {
  searchName: string;
}

interface CardValues {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export function CardContainer(props: Props) {
  const [cardList, setCardList] = useState<CardValues[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchAllPages = (pages: number) => {
    for (let i = 1; i <= pages; i++) {
      (async function () {
        fetch(`https://rickandmortyapi.com/api/character?page=${i}&name=${props.searchName}`)
          .then((response) => response.json())
          .then(async (commits) => {
            if (commits.error) return;
            await setCardList((prevCards: CardValues[]) => {
              return [...new Set([...prevCards, ...commits.results])];
            });
          })
          .then(() => {
            setTimeout(() => setIsLoaded(true), 1000);
          })
          .catch((e) => {
            console.log(e, 'no ricks');
          });
      })();
    }
  };

  const getAllCards = () => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((res) => res.json())
      .then((data) => {
        fetchAllPages(data.info.pages);
      });
  };

  useEffect(() => {
    getAllCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isLoaded) {
    return <div>It`s loading...</div>;
  } else {
    cardList.sort((a: CardValues, b: CardValues) => (a.id > b.id ? 1 : -1));
    return (
      <>
        <h3>Card amount: {cardList.length}</h3>
        <div className={style.container}>
          {cardList.map((item: CardValues) => {
            return (
              <Card
                key={item.id}
                name={item.name}
                status={item.status}
                species={item.species}
                img={item.image}
                location={item.location.name}
              />
            );
          })}
        </div>
      </>
    );
  }
}
