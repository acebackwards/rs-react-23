import React, { Component } from 'react';
import { Input, Button } from '../../shared/ui';
import { Card } from '../../entities/ui';
import s from './style.module.css';
import { apiJson } from '../../assets/api';

export class MainPage extends Component {
  render() {
    return (
      <div>
        <div className={s.search}>
          <Input placeholder="Search..." />
          <Button title="Search" />
        </div>
        <div className={s.container}>
          {apiJson.map((item) => {
            return (
              <Card
                key={item.id}
                name={item.name}
                status={item.status}
                species={item.species}
                img={item.image}
                location={item.location.name}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
