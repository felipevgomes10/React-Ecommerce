import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  background: #F7F7F7;
  border-radius: 9.02222px;
  height: 243px;
  margin: 2.7rem 2rem;
  padding: 3rem;
  position: relative;

  &::after {
    content: '';
    height: 1.3px;
    width: 85%;
    background: #D6D6D6;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & h1 {
    font-size: 2.8rem;
  }

  & div:first-of-type {
    display: flex;
    align-items: center;
    margin-top: 1.2rem;

    & img {
      width: 47px;
      height: 47px;
      margin-right: 1.5rem;
    }

    & p {
      font-size: 2rem;
    }
  }

  & div:last-of-type {
    margin-top: 7rem;
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-template-rows: repeat(2, min-content);
    font-size: 1.9rem;

    & p {
      align-self: end;
    }

    & small {
      color: #a5a5a5;
      grid-column: 1 / 2;
    }

    & span {
      grid-row: 1 / 3;
      grid-column: 2 / 3;
      align-self: center;
      margin-left: 2rem;
      font-size: 5rem;
      font-weight: bold;
    }
  }

  & + button {
    justify-self: center;
  }
`