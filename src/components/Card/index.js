import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { Container, Label } from './styles';

const TYPE = {
  CARD: 'CARD'
};

export default function Card({ data, index }) {
  const ref = useRef();

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: TYPE.CARD, index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  });

  const [, dropRef] = useDrop({
    accept: TYPE.CARD,
    hover(item, monitor) {
      console.log(item.index, index);
    }
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        {data.labels.map(label => <Label key={label} color={label} />)}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="Avatar" />}
    </Container>
  );
}
