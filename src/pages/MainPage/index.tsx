import React from 'react';
import { SearchBar } from '../../entities/ui';
import { CardContainer } from '../../widgets';

export const MainPage = () => {
  return (
    <div>
      <SearchBar storedData="data" />
      <CardContainer searchName="rick" />
    </div>
  );
};
