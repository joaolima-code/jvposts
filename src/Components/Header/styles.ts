import styled from 'styled-components';

export const Container = styled.header`
  width: 84%;
  margin: 0 auto;
  padding-top: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  nav {
    width: 30%;
    padding-right: 2rem;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    a {
      color: var(--title);
      font-size: 1.25rem;
      font-weight: 500;

      :hover {
        color: var(--primary-color);
        font-size: 1.4rem;
        transition: 0.4s;
      }
    }
  }
`;
