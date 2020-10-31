import styled, { css } from 'styled-components'

export const ConfirmationWrapper = styled.div`
  align-self: stretch;
  max-width: 100%;
  height: 63rem;
  padding: 2.9rem;
  margin-right: 9rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 26.9rem min-content;
  column-gap: 3.5rem;
  background: #F7F7F7;
  border-radius: 10.8757px;

  @media (max-width: 75em) {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
      width: 86%;
      margin: 5rem 5rem;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, min-content);
      height: auto;
    }

  @media (max-width: 25em) {
      width: 80%;
  }

  & button[data-type='placeOrder'] {
    align-self: center;

    @media (max-width: 43.75em) {
      margin-top: 3rem;
    }
  }
`
export const InfoContainer = styled.div`
  grid-row: ${({ rows }) => rows };
  grid-column: ${({ columns }) => columns };
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: repeat(2, min-content);
  row-gap: ${({ rowGap }) => !rowGap ? '1.6rem' : rowGap};
  column-gap: 1.7rem;

  @media (max-width: 43.75em) {
    ${props => props.first && css`
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        margin-bottom: 3rem;
    `}

    ${props => props.second && css`
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        margin-bottom: 3rem;
    `}
  }
`
export const ProductText = styled.p`
  grid-column: ${({ columns }) => !columns ? 'span 2' : columns };
  grid-row: ${({ rows }) => !rows ? 'initial' : rows };
  align-self: ${({ align }) => !align ? 'initial' : align};
  font-size: ${({ font }) => font };
  color: ${({ color }) => !color ? '#000' : color};
  margin: ${({ margin }) => !margin ? 'initial' : margin };
`
export const BankImg = styled.img`
  grid-column: ${({ columns }) => !columns ? 'initial' : columns };
  width: 47px;
  height: 47px;
`