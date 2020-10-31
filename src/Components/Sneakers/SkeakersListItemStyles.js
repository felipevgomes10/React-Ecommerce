import styled from 'styled-components'

export const Card = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 373px;
  background: #FFFFFF;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.05);
`
export const Description = styled.div`
  grid-row: 2 / 3;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  padding: 0 1.5rem 1.5rem 1.5rem;

  & h3 {
    font-size: 2rem;
    font-weight: 400;
    grid-column: span 2;
  }

  & > div {
    grid-row: 2 / 3;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & label {
      margin-right: 8px;
    }
  }

  & h2 {
    font-weight: 600;
    font-size: 21px;
    grid-column: span 2;
  }

  & button {
    grid-column: span 2;
    width: 100%;
    height: 100%;
    background: #6B8067;
    color:#FFFFFF;
    border-radius: 4.50483px;
    margin-top: 1rem;
  }
`
export const Warning = styled.small`
  color: #f56358;
  opacity: ${({ warning }) => warning ? 1 : 0};
  grid-column: span 2;
  margin-top: 1rem;
`