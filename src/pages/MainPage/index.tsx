import React, { useEffect, useState } from 'react';
import { Input, Button } from '../../shared/ui';
import { Card } from '../../entities/ui';
import s from './style.module.css';
import { apiJson } from '../../assets/api';

export const MainPage = () => {
  const [inputValue, setInputValue] = useState('');

  const inputChange = (e: { target: { value: string } }) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      setInputValue(storedData);
    }
  }, []);

  useEffect(() => {
    return () => {
      localStorage.setItem('data', inputValue);
    };
  }, [inputValue]);

  window.onunload = () => {
    localStorage.setItem('data', inputValue);
  };

  return (
    <div>
      <div className={s.search}>
        <Input placeholder="Search..." defaultValue={inputValue} onChange={inputChange} />
        <Button title="Search" />
      </div>
      <div className={s.container}>
        {apiJson.map((item) => {
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
    </div>
  );
};
