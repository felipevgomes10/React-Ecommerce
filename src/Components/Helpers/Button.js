import React from 'react'
import styled from 'styled-components'

const CTA = styled.button`
  outline: none;
  border: none;
  background: #6B8067;
  border-radius: 4.50483px;
  color: #FFFFFF;
  font-size: 14px;
  line-height: 19px;
  font-weight: bold;
  font-family: Open Sans;
  width: ${({width}) => width};
  height: ${({height}) => height};
  cursor: pointer;
  transition: .1s;

  &:hover {
    border: 2px solid #92ad8c;
    box-shadow: 0 0 0 2px #333;
    transform: translateY(-2px);
  }

  &:active {
    transform: initial;
  }
`

const Button = ({ children, width, height }) => {
  return (
    <CTA width={width} height={height}>
      {children}
    </CTA>
  )
}

export default Button
