import React from 'react';
import { MdAdd } from 'react-icons/md';

import { Container } from './styles';

import Card from '../Card';

export default function List() {
  return (
    <Container>
      <header>
        <h2>Tasks</h2>
        <button type="button">
          <MdAdd size={24} color="#fff" />
        </button>
      </header>

      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </Container>
  );
}
