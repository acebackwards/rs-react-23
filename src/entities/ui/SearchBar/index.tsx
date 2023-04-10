import React, { useState, useEffect } from 'react';
import { Input, Button } from '../../../shared/ui';

import style from './style.module.css';

interface Props {
  storedData: string;
  startSearch(s: string): void;
}

export function SearchBar(props: Props) {
  const [inputValue, setInputValue] = useState('');

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      localStorage.setItem(props.storedData, inputValue);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  window.onunload = () => {
    localStorage.setItem(props.storedData, inputValue);
  };

  return (
    <form className={style.search} onSubmit={handleClick}>
      <Input
        id="search-input"
        placeholder="Search..."
        defaultValue={inputValue}
        onChange={inputChange}
      />
      <div>
        <Button title="Search" type="submit" />
      </div>
    </form>
  );
}
