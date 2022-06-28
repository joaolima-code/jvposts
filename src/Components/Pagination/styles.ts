import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  width: 10rem;

  button {
    width: 2.25rem;
    height: 2.25rem;

    align-items: center;
    justify-content: center;

    color: var(--title);
    background: rgba(248, 248, 248, 0.3);

    border-radius: 50%;
  }

  p {
    color: var(--title);
  }
`;
