import React from 'react'
import styled from 'styled-components'

const MethodOption = styled.button` 
  background: #FFFFFF;
  border-radius: 10.8766px;
  width: 100%;
  height: 7.5rem;
  border: none;
  outline: none;
  font-family: Open Sans;
  font-size: 1.6rem;
  color: #A5A5A5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.1rem;
  cursor: pointer;

  &:focus,
  &:hover {
    border: 1px solid #5DAC50;
    outline: none;
  }
`

const PaymentMethod = ({ data, children, src, onClick, onFocus, ...props }) => {
  return (
    <MethodOption onClick={onClick} onFocus={onFocus} data-type={data} {...props}>
      {children}
      <img alt={data} src={src}/>
    </MethodOption>
  )
}

export default PaymentMethod
