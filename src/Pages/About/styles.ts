import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--background);

  main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    width: 80%;
    margin: 0 auto;
  }

  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 65%;
    margin: 0 auto;
    padding: 5rem 0;
  }

  h1 {
    width: 100%;
    color: var(--title);
    padding-top: 4rem;

    text-align: center;
    overflow-wrap: break-word;
    font-size: 2.8rem;
    font-weight: bold;
    line-height: 3.1rem;
  }

  main h2,
  section h2 {
    color: var(--title);
    font-weight: bold;
    font-size: 2rem;
    line-height: 3rem;

    padding-top: 2rem;
  }

  main p {
    width: 40rem;
    color: var(--subtitle);

    font-size: 1.1rem;
    font-weight: medium;
    line-height: 1.5rem;
    padding-bottom: 2rem;
  }

  main img {
    height: 80%;
    max-width: 90%;

    border-radius: 50%;
  }

  section div {
    width: 80%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  section img {
    max-width: 60%;
  }
`;
