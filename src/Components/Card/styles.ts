import styled from 'styled-components';

export const Container = styled.div`
  width: 25rem;
  height: 30rem;

  display: flex;
  flex-direction: column;

  background-color: var(--footer);
  border-radius: 0.625rem;

  div {
    height: 70%;
    margin-bottom: 1.5rem;
  }

  img {
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;
  }

  h3 {
    color: var(--title);
    font-size: 1.375rem;
    font-weight: 400;
    line-height: 2rem;
    overflow: hidden;

    padding: 0 1.122rem;
  }

  p {
    color: var(--subtitle);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    overflow: hidden;

    padding: 0 1.122rem;
  }
`;
