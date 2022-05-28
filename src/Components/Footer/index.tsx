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
            <td>Sobre</td>
            <td>Linkedin</td>
          </tr>
          <tr>
            <td>Tecnologias</td>
            <td>Github</td>
          </tr>
          <tr>
            <td>Contatos</td>
            <td>Instagram</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default Footer;
