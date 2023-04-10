import React, { useEffect, useState } from 'react';
import { SearchBar } from '../../entities/ui';
import { CardContainer } from '../../widgets';

export const MainPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const storedData = localStorage.getItem('search');
    if (storedData) {
      setInputValue(storedData);
    }
    setPending(false);
  }, []);

  useEffect(() => {
    return () => {
      localStorage.setItem('search', inputValue);
    };
  });

  window.onunload = () => {
    localStorage.setItem('search', '');
  };

  const startSearch = (search: string) => {
    setInputValue(search);
    localStorage.setItem('search', search);
  };

  const showCards = () => {
    return <CardContainer searchName={inputValue} />;
  };

  if (pending) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <SearchBar storedData="data" startSearch={startSearch} />
        {showCards()}
      </div>
    );
  }
};
