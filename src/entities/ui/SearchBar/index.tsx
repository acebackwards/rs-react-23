import React, { useState, useEffect } from 'react';
import { Input, Button } from '../../../shared/ui';

import style from './style.module.css';

interface Props {
  storedData: string;
  startSearch(s: string): void;
}

export function SearchBar(props: Props) {
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    props.startSearch(inputValue);
  };

  const inputChange = (e: { target: { value: string } }) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const storedData = localStorage.getItem(props.storedData);
    if (storedData) {
      setInputValue(storedData);
    }
  }, []);

  useEffect(() => {
    return () => {
      localStorage.setItem(props.storedData, inputValue);
    };
  }, [inputValue]);

  window.onunload = () => {
    localStorage.setItem(props.storedData, inputValue);
  };

  return (
    <div className={style.search}>
      <Input placeholder="Search..." defaultValue={inputValue} onChange={inputChange} />
      <div onClick={handleClick}>
        <Button title="Search" />
      </div>
    </div>
  );
}
