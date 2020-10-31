import styled from 'styled-components'

export const SectionCart = styled.section`
  grid-column: full-start / full-end;
  display: grid;
  grid-template-columns: 40% 1fr;
  grid-template-rows: auto min-content;
  justify-content: center;
  align-items: center;
  column-gap: 10rem;

  @media (max-width: 75em) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, min-content);
  }

  & > .breadCrumbs {
    grid-column: span 2;
    grid-row: 1 / 2;
    margin: 6.6rem 3rem 8.6rem 0;

    @media (max-width: 75em) {
      grid-column: 1 / 2;
    }
  }

  & > .confirmationPanel {
    grid-column: 2 / 3;
    grid-row: 2 / 3;

    @media (max-width: 75em) {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
    }
  }

  & > section:first-of-type {
    height: 100%;
    padding: 0 0 5rem 5rem;

    @media (max-width: 75em) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      padding: 0 5rem;
    }

    & div {
      height: 100%;
      border-radius: 10.8766px;
      overflow: hidden;
    }

    & * {
      width: 100%;
      height: 63rem;
      object-fit: cover;
    }
  }

  & > section:nth-of-type(2) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    width: 100%;
    height: 63rem;
    justify-self: center;
    align-self: stretch;
    margin-right: 9rem;

    @media (max-width: 75em) {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
      width: 86%;
      margin: 5rem 5rem;
    }
  }
`