import styled, { css } from 'styled-components'

export const MethodOption = styled.button` 
  background: #FFFFFF;
  border-radius: 10.8766px;
  width: 100%;
  height: 7.5rem;
  border: none;
  outline: none;
  font-size: 1.6rem;
  color: #A5A5A5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.1rem;
  cursor: pointer;

  ${props => props.save && css`
    & {
      position: relative
    }

    @media (max-width: 31.25em) {
      padding: 1.5rem 1.5rem 3rem;
    }

    &::after {
      content: 'save $10';
      display: block;
      font-weight: bold;
      font-size: 9.77px;
      line-height: 13px;
      text-align: center;
      color: #9E7D27;
      background: #FFCC00;
      border-radius: 2.079px;
      padding: .5rem 1rem;
      position: absolute;
      top: -6px;

      @media (max-width: 31.25em) {
        border-radius: 5px;
        top: 27px;
        left: 9px;
        line-height: 8px;
      }
    }
  `}

  &:focus,
  &:hover {
    border: 1px solid #5DAC50;
    outline: none;
  }

  @media (max-width: 31.25em) {

    & img {
      margin-left: .5rem;
      max-width: 60%;
    }
  }
`