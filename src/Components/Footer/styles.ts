import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 13.5rem;
  margin: 0 auto;
  padding: 0 7.5rem 0 7.5rem;

  background: var(--footer);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div p {
    color: var(--subtitle);
    font-size: 1rem;
    font-weight: 500;

    strong {
      color: var(--title);
      font-size: 1.1rem;
      font-weight: 500;
    }
  }

  table {
    height: 6.3rem;
    align-items: center;
    justify-content: space-evenly;
  }
  table th {
    padding-top: 0.5rem;
    padding-right: 5rem;
    text-align: start;

    font-size: 1rem;
    font-weight: 700;
    color: var(--title);
  }
  table td {
    padding-right: 5rem;
    padding-top: 0.6rem;
    text-align: start;

    font-size: 1rem;
    font-weight: 500;
    color: var(--subtitle);
  }
`;
