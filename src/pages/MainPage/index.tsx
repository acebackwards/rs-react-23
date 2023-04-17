import React, { useEffect, useState } from 'react';
import { SearchBar } from '../../entities/ui';
import { CardContainer } from '../../widgets';
import { useAppDispatch, useAppSelector } from '../../app/hooks/redux';
import { newSearchValue } from '../../app/store/reducers/CardSlice';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { searchValue } = useAppSelector((state) => state.searchReducer);
  const [inputValue, setInputValue] = useState('');
  const [pending, setPending] = useState(true);

  useEffect(() => {
    setInputValue(searchValue);
    setPending(false);
    dispatch(newSearchValue(searchValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startSearch = (search: string) => {
    dispatch(newSearchValue(search));
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
        <SearchBar storedData="data" defaultValue={searchValue} startSearch={startSearch} />
        {showCards()}
      </div>
    );
  }
};
