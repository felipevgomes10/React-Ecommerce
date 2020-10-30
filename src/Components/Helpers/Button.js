import React from 'react'
import styled from 'styled-components'

const CTA = styled.button`
  outline: none;
  border: none;
  background: ${({background}) => background};
  border-radius: 4.50483px;
  color: ${({color}) => color};
  font-size: 14px;
  line-height: 19px;
  font-weight: bold;
  font-family: Open Sans;
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

const Button = ({
   children,
   width,
   height,
   background,
   color,
   shadow,
   border,
   onClick,
   ...props 
}) => {
  return (
    <CTA 
      width={width} 
      height={height} 
      background={background} 
      color={color} 
      shadow={shadow} 
      border={border}
      onClick={onClick}
      {...props}
    >
      {children}
    </CTA>
  )
}

export default Button
