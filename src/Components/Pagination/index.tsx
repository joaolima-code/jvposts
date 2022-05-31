import React from 'react';
import arrowLeft from '../../Assets/arrow-left.svg';
import arrowRight from '../../Assets/arrow-right.svg';
import { Container } from './styles';

const Pagination: React.FC = () => {
  return (
    <Container>
      <button>
        <img src={arrowLeft} alt="seta esquerda" />
      </button>
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <button>
        <img src={arrowRight} alt="seta direita" />
      </button>
    </Container>
  );
};

export default Pagination;
