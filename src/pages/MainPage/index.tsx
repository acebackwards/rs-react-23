import React, { useState } from 'react';
import { SearchBar } from '../../entities/ui';
import { CardContainer } from '../../widgets';

export const MainPage = () => {
  const [inputValue, setInputValue] = useState('');

  const startSearch = (search: string) => {
    setInputValue(search);
  };

  return (
    <div>
      <SearchBar storedData="data" startSearch={startSearch} />
      <CardContainer searchName={inputValue} />
    </div>
  );
};
