import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MAIN_PAGE_ROUTE, ABOUT_PAGE_ROUTE } from './consts/routes';
import { MainPage, AboutPage, ErrorPage } from '../pages';
import { Header } from '../widgets';

import './index.css';

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={MAIN_PAGE_ROUTE} element={<MainPage />} />
          <Route path={ABOUT_PAGE_ROUTE} element={<AboutPage />} />

          <Route path={'*'} element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
