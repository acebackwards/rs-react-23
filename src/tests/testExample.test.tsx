import { render, screen } from '@testing-library/react';
import { AboutPage, ErrorPage } from '../pages';
import React from 'react';
import { Card, FormCard } from '../entities/ui';
import { Input, Button } from '../shared/ui';

describe('Card', () => {
  const item = {
    id: 1,
    name: 'string',
    status: 'string',
    species: 'string',
    type: 'string',
    gender: 'string',
    origin: {
      name: 'string',
      url: 'string',
    },
    location: {
      name: 'string',
      url: 'string',
    },
    image: 'string',
    episode: ['string', 'string'],
    url: 'string',
    created: 'string',
  };
  it('renders card', () => {
    render(<Card item={item} />);
    screen.debug();
  });
});

describe('Input', () => {
  it('renders input', () => {
    render(<Input placeholder="Поиск..." defaultValue="Rick" onChange={() => true} />);
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
  it('renders About Page', () => {
    render(<AboutPage />);
  });
  it('renders Error Page', () => {
    render(<ErrorPage />);
  });
});

describe('Form Card', () => {
  it('renders card', () => {
    render(
      <FormCard
        title="Title"
        gender="Gender"
        developer={true}
        type="2"
        image="localhost:5173/img"
        date="Today"
      />
    );
  });
});
