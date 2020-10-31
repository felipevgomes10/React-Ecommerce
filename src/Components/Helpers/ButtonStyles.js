import styled from 'styled-components'

export const CTA = styled.button`
  outline: none;
  border: none;
  background: ${({background}) => background};
  border-radius: 4.50483px;
  color: ${({color}) => color};
  font-size: 1.4rem;
  line-height: 19px;
  font-weight: bold;
  width: ${({width}) => width};
  height: ${({height}) => height};
  cursor: pointer;
  transition: .1s;

  &:hover {
    border: ${({border}) => '2px solid ' + border};
    box-shadow: ${({shadow}) => '0 0 0 2px ' + shadow};
    transform: translateY(-2px);
  }

  &:active {
    transform: initial;
  }

  &:disabled {
    background: #aed1a7;
  }
`