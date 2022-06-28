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
          <a href="/">Home</a>
        </div>
        <div>
          <a href="/posts">Posts</a>
        </div>
        <div>
          <a href="/about-us">Sobre</a>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
