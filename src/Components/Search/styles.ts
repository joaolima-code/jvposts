import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-left: 2rem;

  input {
    width: 43rem;
    height: 3rem;

    background-color: var(--footer);
    border: none;
    border-radius: 0.5rem;
    padding-left: 1.3rem;

    font-size: 1.2rem;
    color: var(--subtitle);

    ::placeholder {
      color: var(--subtitle);
    }
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    color: var(--subtitle);
    padding-left: 2rem;

    select {
      background-color: transparent;
      border: none;
      padding-left: 1rem;
      cursor: pointer;

      font-size: 1rem;
      color: var(--title);

      option {
        background-color: var(--footer);
        color: var(--subtitle);
        line-height: 1.7rem;
      }
    }
  }
`;
