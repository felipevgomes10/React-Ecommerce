import React from 'react'
import {
  ConfirmationWrapper, 
  InfoContainer, 
  ProductText, 
  BankImg
} from './ConfirmationPanelStyles'
import { ProductsContext } from '../../ProductsContext'
import Bank from '../../Assets/bank.png'
import Button from '../Helpers/Button'
import { Helmet } from 'react-helmet'

const ConfirmationPanel = () => {

  const { order } = React.useContext(ProductsContext);

  return (
    <ConfirmationWrapper className='confirmationPanel'>
      <Helmet>
        <title>Sneakers | Review and Confirmation</title>
        <meta name='description' content='the last step to get your sneakers is to place the order'/>
      </Helmet>
      <InfoContainer first columns='1 / 2'>
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
      <InfoContainer second columns='2 / 3'>
        <ProductText font='1.95rem'>Payment Method</ProductText>
        <BankImg src={Bank} alt='bank-icon' columns='1 / 2'/>
        <ProductText font='1.7rem' columns='2 / 3' align='center'>{order.method}</ProductText>
      </InfoContainer>
      <InfoContainer columns='1 / 2' rowGap='0'>
        <ProductText font='1.6rem' columns='1 / 2' align='end'>Total cost</ProductText>
        <ProductText 
          font='1.6rem' 
          color='#A5A5A5' 
          columns='1 / 2' 
          align='top'
        >
          Delivery included
        </ProductText>
        <ProductText 
          font='4.5rem' 
          columns='2 / 3' 
          rows='1 / 3' 
          align='center'
        >
          $ {order.price}
        </ProductText>
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
