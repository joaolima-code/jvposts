import React from 'react';
import Card from '../../Components/Card';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Pagination from '../../Components/Pagination';
import Search from '../../Components/Search';

import { Container, MainContainer } from './styles';

const Posts: React.FC = () => {
  return (
    <>
      <Container>
        <MainContainer>
          <Header />
          <main>
            <h1>
              Programação JavaScript: O que é possível criar com essa linguagem
            </h1>
            <h2>PROGRAMADOR VIKING - 22 DE DEZEMBRO DE 2020</h2>
          </main>
        </MainContainer>
        <section>
          <Pagination />
          <Search />
        </section>
        <article>
          <Card />
        </article>
        <Footer />
      </Container>
    </>
  );
};

export default Posts;
