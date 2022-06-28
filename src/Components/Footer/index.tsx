import React from 'react';
import Logo from '../Logo';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <Logo />
        <p>
          Desenvolvido por <strong>João Vitor Lima</strong>
        </p>
      </div>
      <table>
        <thead>
          <th>Dev</th>
          <th>Redes Sociais</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="/about-us">Sobre</a>
            </td>
            <td>
              <a
                href="https://www.linkedin.com/in/lima-joaovitor/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/about-us">Contatos</a>
            </td>
            <td>
              <a
                href="https://github.com/joaolima-code"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <a
                href="https://www.instagram.com/limajoaovitoralves/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default Footer;
