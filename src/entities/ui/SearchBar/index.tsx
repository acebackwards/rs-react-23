import React, { useState, useEffect } from 'react';
import { Input, Button } from '../../../shared/ui';

import style from './style.module.css';

interface Props {
  storedData: string;
}

export function SearchBar(props: Props) {
  const [inputValue, setInputValue] = useState('');

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
      <Button title="Search" />
    </div>
  );
}
