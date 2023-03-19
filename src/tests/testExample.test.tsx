import { render, screen } from '@testing-library/react';
import { AboutPage, ErrorPage, MainPage } from '../pages';
import React from 'react';
import { Card } from '../entities/ui';
import { Input, Button } from '../shared/ui';
import { Header } from '../widgets';
import { App } from '../app';

describe('App', () => {
  it('runs app', () => {
    render(<App />);
    screen.debug();
  });
});

describe('Card', () => {
  it('renders card', () => {
    render(
      <Card name={'name'} status={'status'} species={'species'} img={'image'} location={'name'} />
    );
  });
});

describe('Input', () => {
  it('renders input', () => {
    render(<Input placeholder="Поиск..." />);
  });
});

describe('Header', () => {
  it('renders header', () => {
    render(<Header />);
    // screen.debug();
  });
});

describe('Button', () => {
  it('renders button', () => {
    render(<Button title="Поиск" />);
  });
  it('renders button', () => {
    render(<Button title="ОК" />);
  });
  it('renders button', () => {
    render(<Button title="Search" />);
  });
});

describe('pages', () => {
  it('renders Main Page', () => {
    render(<MainPage />);
  });
  it('renders About Page', () => {
    render(<AboutPage />);
  });
  it('renders Error Page', () => {
    render(<ErrorPage />);
  });
});
