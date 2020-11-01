import React from 'react'
import {
  PaymentWrapper, 
  Cost, 
  Container, 
  Text, 
  ProductName, 
  Details
} from './PaymentStyles'
import { ProductsContext } from '../../ProductsContext'
import ConfirmationPanel from './ConfirmationPanel'
import PaymentPanel from './PaymentPanel'
import useMedia from '../Hooks/useMedia'
import ResponsivePaymentPanel from '../responsive/ResponsivePaymentPanel'

const Payment = () => {

  const { order, steps } = React.useContext(ProductsContext);
  const media = useMedia('(max-width: 25em)');

  if (steps === 2) return <ConfirmationPanel />
  if (media) return <ResponsivePaymentPanel />
  return (
    <PaymentWrapper>
      <Container rows='1 / 2' columns='1 / 2'>
        <Text>Cart Total</Text>
        <ProductName>{order.name}</ProductName>
        <Details>X {order.quantity} {order.color} Size {order.size}</Details>
        <Details>Item #{order.id}</Details>
      </Container>
      <Container rows='1 / 2' columns='2 / 3'>
        <Text>Delivery details</Text>
        <Details>John Smith</Details>
        <Details>Phone no: 01312428200</Details>
        <Details>Address: Redwood City, 2000.</Details>
        <Cost className='cost'>
          <p>Total Cost</p>
          <p>Delivery included</p>
          <p>$ {order.price}</p>
        </Cost>
      </Container>
      <PaymentPanel />
    </PaymentWrapper>
  )
}

export default Payment
