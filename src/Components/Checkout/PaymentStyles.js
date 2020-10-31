import styled from 'styled-components'

export const PaymentWrapper = styled.section`
  background: #F7F7F7;
  border-radius: 10.8766px;
  max-width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 1fr;
  padding: 2.9rem;

  & button[data-type='continueBtn'] {
    grid-column: 2 / 3;

    @media (max-width: 50em) {
      grid-column: 1 / -1;
      margin-top: 1.5rem;
    }
  }
`
export const Cost = styled.div` 
  display: grid;
  grid-template-rows: repeat(2, min-content);
  grid-template-columns: 65% max-content;
  align-items: center;
  font-size: 1.6rem;
  margin-top: 1.4rem;

  @media (max-width: 50em) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  & p:first-of-type {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }

  & p:nth-of-type(2) {
    color: #A5A5A5;
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }

  & p:nth-of-type(3) {
    font-size: 3.35rem;
    grid-row: span 2;
    grid-column: 2 / 3;
  }
`
export const Container = styled.div`
  grid-row: ${({ rows }) => rows };
  grid-column: ${({ columns }) => columns };
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`
export const Text = styled.p`
  font-size: 2.2rem;
`
export const ProductName = styled.p`
  font-size: 1.6rem;
  margin-top: 1.9rem;
`
export const Details = styled.small`
  font-size: 1.6rem;
  color: #A5A5A5;
  margin-top: .7rem;
`