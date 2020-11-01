import React from 'react'
import { Wrapper, TextWrapper, Title } from './ResponsiveSumaryStyles'
import { ProductsContext } from '../../ProductsContext'
import Image from '../Helpers/Image'

const ResponsiveSumary = () => {

  const { order } = React.useContext(ProductsContext);

  return (
    <>
      <Title>Review and confirmation</Title>
      <Wrapper margin='2rem 2rem 0rem'>
        <h1>Order Sumary</h1>
        <Image src={order.img} alt={order.description} />
        <TextWrapper>
          <p>{order.name}</p>
          <small>X {order.quantity} {order.color} Size {order.size}</small>
          <small>Item #{order.id}</small>
        </TextWrapper>
      </Wrapper>
    </>
  )
}

export default ResponsiveSumary
