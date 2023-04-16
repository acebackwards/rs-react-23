import React, { useEffect, useState } from 'react';
import { SearchBar } from '../../entities/ui';
import { CardContainer } from '../../widgets';
import { useAppSelector } from '../../app/hooks/redux';
import { searchSlice } from '../../app/store/reducers/CardSlice';

export const MainPage = () => {
  const { searchValue } = useAppSelector((state) => state.searchReducer);

  const [inputValue, setInputValue] = useState('');
  const [pending, setPending] = useState(true);

  useEffect(() => {
    setInputValue(searchValue);
    setPending(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startSearch = (search: string) => {
    searchSlice.actions.newSearchValue(inputValue);
    setInputValue(search);
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
