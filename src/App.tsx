import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { MAIN_PAGE_ROUTE, ABOUT_PAGE_ROUTE } from './utils/consts';
import MainPage from './pages/MainPage/MainPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={MAIN_PAGE_ROUTE} element={<MainPage />} />
          <Route path={ABOUT_PAGE_ROUTE} element={<AboutPage />} />

          <Route path={'*'} element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
