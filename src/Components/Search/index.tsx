import React from 'react';

import { Container } from './styles';

const Search: React.FC = () => {
  return (
    <Container>
      <input type="text" placeholder="Pesquisar Post" />
      <div>
        <p>Gênero:</p>
        <select>
          <option value="0" selected>
            Todos
          </option>
          <option value="1">Tecnologia</option>
          <option value="2">Cursos</option>
          <option value="3">Vagas</option>
        </select>
      </div>
    </Container>
  );
};

export default Search;
