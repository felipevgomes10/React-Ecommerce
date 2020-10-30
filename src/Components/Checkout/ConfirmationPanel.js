import React from 'react'
import styled from 'styled-components'
import { ProductsContext } from '../../ProductsContext'
import Bank from '../../Assets/bank.png'
import Button from '../Helpers/Button'

const ConfirmationWrapper = styled.div`
  align-self: stretch;
  max-width: 100%;
  height: 63rem;
  padding: 2.9rem;
  margin-right: 9rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 26.9rem min-content;
  column-gap: 3.5rem;
  font-family: Open Sans;
  background: #F7F7F7;
  border-radius: 10.8757px;

  & button[data-type='placeOrder'] {
    align-self: center;
  }
`
const InfoContainer = styled.div`
  grid-row: ${({ rows }) => rows };
  grid-column: ${({ columns }) => columns };
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: repeat(2, min-content);
  row-gap: ${({ rowGap }) => !rowGap ? '1.6rem' : rowGap};
  column-gap: 1.7rem;
`
const ProductText = styled.p`
  grid-column: ${({ columns }) => !columns ? 'span 2' : columns };
  grid-row: ${({ rows }) => !rows ? 'initial' : rows };
  align-self: ${({ align }) => !align ? 'initial' : align};
  font-size: ${({ font }) => font };
  color: ${({ color }) => !color ? '#000' : color};
  margin: ${({ margin }) => !margin ? 'initial' : margin };
`
const BankImg = styled.img`
  grid-column: ${({ columns }) => !columns ? 'initial' : columns };
  width: 47px;
  height: 47px;
`

const ConfirmationPanel = () => {

  const { order } = React.useContext(ProductsContext);

  return (
    <ConfirmationWrapper>
      <InfoContainer columns='1 / 2'>
        <ProductText font='1.95rem'>Order summary</ProductText>
        <div>
          <ProductText font='1.7rem' margin='0 0 .65rem 0'>
            {order.name}
          </ProductText>
          <ProductText font='1.6rem' color='#A5A5A5' margin='0 0 .65rem 0'>
            X {order.quantity} {order.color} Size {order.size}
          </ProductText>
          <ProductText font='1.6rem' color='#A5A5A5'>
            Item #{order.id}
          </ProductText>
        </div>
      </InfoContainer>
      <InfoContainer columns='2 / 3'>
        <ProductText font='1.95rem'>Payment Method</ProductText>
        <BankImg src={Bank} alt='bank-icon' columns='1 / 2'/>
        <ProductText font='1.7rem' columns='2 / 3' align='center'>{order.method}</ProductText>
      </InfoContainer>
      <InfoContainer columns='1 / 2' rowGap='0'>
        <ProductText font='1.6rem' columns='1 / 2' align='end'>Total cost</ProductText>
        <ProductText font='1.6rem' color='#A5A5A5' columns='1 / 2' align='top'>Delivery included</ProductText>
        <ProductText font='4.5rem' columns='2 / 3' rows='1 / 3' align='center'>$ {order.price}</ProductText>
      </InfoContainer>
      <Button 
        width='100%' 
        height='4.1rem' 
        border='#92ad8c' 
        shadow='#333' 
        background=' #6B8067'
        color='#FFFFFF'
        data-type='placeOrder'
      >
        Place order
      </Button> 
    </ConfirmationWrapper>
  )
}

export default ConfirmationPanel
