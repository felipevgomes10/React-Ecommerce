import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  margin: ${({ margin }) => margin ? margin : 'initial'};

  background: #F7F7F7;
  border-radius: 9.02222px;
  height: 244px;
  padding: 2rem;

  & button {
    grid-row: 3 / 4;
    margin: 1rem 0;
  }

  & > button {
    margin-top: 2rem;
  }
`
export const Title = styled.h1`
  margin: 2rem 2rem 0;
  font-size: 3.8rem;
  font-weight: 400;
`