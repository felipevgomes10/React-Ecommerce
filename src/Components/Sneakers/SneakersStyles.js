import styled from 'styled-components'

export const Section = styled.section`
  grid-column: full-start / full-end;

  & ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240.32px, 1fr));
    justify-content: center;
    justify-items: center;
    align-items: center;
    gap: ${({ match }) => match ? '4rem' : '8.4rem'};
    width: 80%;
    margin: 57px auto;
  }

  & > button {
    position: absolute;
    top: 104px;
    left: 61px;

    @media (max-width: 25em) {
      top: 153px;
      left: 34px;
    }
  }
`