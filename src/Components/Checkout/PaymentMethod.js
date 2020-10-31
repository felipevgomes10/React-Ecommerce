import React from 'react'
import { MethodOption } from './PaymentMethodStyles'

const PaymentMethod = ({ data, children, src, onClick, onFocus, ...props }) => {
  return (
    <MethodOption onClick={onClick} onFocus={onFocus} data-type={data} {...props}>
      {children}
      <img alt={data} src={src}/>
    </MethodOption>
  )
}

export default PaymentMethod
