import React from 'react';
import Logo from '../Logo';
import { Container } from './styles';

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo />
      <nav>
        <div>
          <a href="Home">Home</a>
        </div>
        <div>
          <a href="Home">Posts</a>
        </div>
        <div>
          <a href="Home">Sobre</a>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
