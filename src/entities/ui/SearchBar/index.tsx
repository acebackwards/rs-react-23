import React, { useState } from 'react';
import { Input, Button } from '../../../shared/ui';

import style from './style.module.css';

interface Props {
  storedData: string;
  defaultValue: string;
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

  return (
    <form className={style.search} onSubmit={handleClick}>
      <Input
        id="search-input"
        placeholder="Search..."
        defaultValue={props.defaultValue}
        onChange={inputChange}
      />
      <div>
        <Button title="Search" type="submit" />
      </div>
    </form>
  );
}
