import React from 'react';

import { Container, Label } from './styles';

export default function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159c1" />
      </header>
      <p>Complete the imigration to the new server</p>
      <img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="Avatar" />
    </Container>
  );
}
