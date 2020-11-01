import React from 'react'
import styled from 'styled-components'
import { ProductsContext } from '../../ProductsContext'
import Image from '../Helpers/Image'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows:  repeat(2, min-content);
  grid-template-columns: max-content 1fr; 
  height: auto;
  background: #F7F7F7;
  border-radius: 9.02222px;
  margin: ${({ margin }) => margin ? margin : 'initial'};
  padding: 3rem;

  & h1 {
    font-size: 2.8rem;
    line-height: 154.6%;
    grid-column: span 2;
    margin-bottom: 2rem;
  }

  & .skeleton {
    align-self: center;
  }

  & .skeleton div,
  & .skeleton img {
    width: 92px;
    height: 92px;
    border-radius: 9.02222px;
    object-fit: cover;
  }
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 2rem;

  & p {
    font-size: 2.8rem;
  }

  & small {
    font-size: 2.4rem;
    color: #A5A5A5;
  }
`
const Title = styled.h1`
  font-weight: 400;
  font-size: 3.7rem;
  margin: 0 2rem 2rem;
`

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
