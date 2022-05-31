import React from 'react';
import imagem_test from '../../Assets/imagem_test.png';

import { Container } from './styles';

const Card: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={imagem_test} alt="img" />
      </div>
      <h3>As 5 Linguagens de Programação mais usadas</h3>
      <p>TecMundo - 10/08/2021 às 18:30</p>
    </Container>
  );
};

export default Card;
