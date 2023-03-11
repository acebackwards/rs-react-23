import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { MAIN_PAGE_ROUTE } from 'utils/consts';
import MainPage from 'pages/MainPage/MainPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={MAIN_PAGE_ROUTE} element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
