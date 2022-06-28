import React from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import github from '../../Assets/github.svg';
import instagram from '../../Assets/instagram.svg';
import linkedin from '../../Assets/linkedin.svg';
import gmail from '../../Assets/gmail.svg';
import whatsapp from '../../Assets/whatsapp.svg';
import pictureMe from '../../Assets/picture_me.jpeg';

import { Container } from './styles';

const About: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <h1>João Vitor Alves de Lima</h1>
        <main>
          <div>
            <h2>Sobre</h2>
            <p>
              Oii, tudo bom?
              <br />
              <br />
              Eu sou o João, programador Front-end Web, trabalhando atualmente
              como estagiario de desenvolvimento web na Arpia Tecnologia, estou
              cursando análise e desenvolvimento de sistemas na Unopar
              Pitágoras.
              <br />
              <br />
              Sou apaixonado por exatas, exclusivamente matemática e lógica,
              sempre gostei de engenharia cívil, mecânica e elétrica. Tenho
              admiração por processos de construções e consertos, desde o
              planejamento em papel, análises e passando por cada etapa de
              desenvolvimento para a finalização do produto.
              <br />
              <br />
              Sou tecnico administrativo formado pelo IFTM. Gosto de aprender,
              estou em constante busca de novos conhecimentos e aprimoramento de
              habilidades, sou focado e tenho determinação para a finalização de
              entregas, buscando a minha evolução contínua.
            </p>
          </div>
          <img src={pictureMe} alt="JoaoLima" />
        </main>
        <section>
          <a
            href="mailto:joaovitoralveslima2409@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gmail} alt="gmail - joaovitoralveslima2409@gmail.com" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5534998886018"
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsapp} alt="whatsapp - 34 998886018" />
          </a>
          <a
            href="https://github.com/joaolima-code"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github - joaolima-code" />
          </a>
          <a
            href="https://www.linkedin.com/in/lima-joaovitor/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin - João Vitor Alves de Lima" />
          </a>
          <a
            href="https://www.instagram.com/limajoaovitoralves/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="instagram - @limajoaovitoralves" />
          </a>
        </section>
        <Footer />
      </Container>
    </>
  );
};

export default About;
