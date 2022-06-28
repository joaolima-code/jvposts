import React from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import devhome from '../../Assets/dev-home.svg';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <main>
          <div>
            <h1>
              Bem Vindo ao JV<strong>Posts</strong>. Desenvolvido como um
              projeto de aprendizado.
            </h1>
            <h2>
              Projeto desenvolvido para melhorar e consolidar meus conhecimentos
              de React.js, Typescript e outras tecnologias.
            </h2>
          </div>
          <img src={devhome} alt="dev-home" />
        </main>
        <Footer />
      </Container>
    </>
  );
};

export default Home;
