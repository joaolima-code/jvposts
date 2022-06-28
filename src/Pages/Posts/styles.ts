import styled from 'styled-components';
import post from '../../Assets/main-post.svg';

export const Container = styled.div`
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--background);

  main {
    height: 33rem;
    width: 85%;
    margin: 0 auto;

    h1 {
      width: 45rem;
      color: var(--title);
      padding-top: 15rem;

      overflow-wrap: break-word;
      font-size: 2.8rem;
      font-weight: bold;
      line-height: 3.1rem;
    }

    h2 {
      width: 34rem;
      color: var(--subtitle);
      padding-top: 2rem;

      font-size: 1.1rem;
      font-weight: medium;
      line-height: 1.5rem;
    }
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 1rem;
  }

  article {
    width: 80%;
    margin: 1.5rem auto;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    grid-gap: 1.8rem;
    justify-content: center;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(
      var(--background) 5%,
      rgba(23, 27, 21, 0.52),
      var(--background) 97%
    ),
    url(${post});
  background-size: 100%;
  background-repeat: no-repeat;
`;
