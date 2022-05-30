import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;

  main {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 7rem;
    align-items: center;

    background-image: linear-gradient(
      rgba(23, 37, 31, 0.02) 35%,
      rgba(25, 145, 235, 0.4)
    );

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      height: 15.5rem;
    }

    div h1 {
      width: 45rem;
      color: var(--title);
      overflow-wrap: break-word;

      font-size: 2.8rem;
      font-weight: bold;
      line-height: 3.1rem;

      strong {
        color: var(--primary-color);
      }
    }

    div h2 {
      width: 34rem;
      color: var(--subtitle);

      font-size: 1.1rem;
      font-weight: medium;
      line-height: 1.5rem;
    }

    img {
      width: 42rem;
      height: 35.7rem;
    }
  }
`;
