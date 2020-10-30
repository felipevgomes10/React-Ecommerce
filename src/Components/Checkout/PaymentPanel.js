import React from 'react'
import styled from 'styled-components'
import PaymentMethod from './PaymentMethod'
import Banks from '../../Assets/banks.png'
import CreditCards from '../../Assets/credit-cards.png'
import ApplePay from '../../Assets/apple-pay.png'
import Button from '../Helpers/Button'
import { ProductsContext } from '../../ProductsContext'
import { establishConnection } from './establishConnection'

const Container = styled.div`
  grid-row: ${({ rows }) => rows };
  grid-column: ${({ columns }) => columns };
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  font-family: Open Sans;
  color: #000000;

  & button[data-type]:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`
const MethodHeader = styled.h2`
  font-size: 2.2rem;
  font-weight: 400;
  margin-top: 2rem;
  margin-bottom: 2.1rem;
`

const PaymentPanel = () => {

  const [paymentMethod, setPaymentMethod] = React.useState('onlineBanking');
  const { order } = React.useContext(ProductsContext);

  const choosePayment = ({ target }) => {
    const paymentType = target.dataset.type;
    setPaymentMethod(paymentType);
  }

  const payOrder = () => {
    if (paymentMethod === 'onlineBanking') {
      establishConnection('felipe.vgomes10@gmail.com', order.price);
    }
  }

  return (
    <>
     <Container rows='2 / 3' columns='1 / -1'>
        <MethodHeader>Select your payment method</MethodHeader>
        <PaymentMethod
          onFocus={choosePayment}
          onClick={choosePayment} 
          data='onlineBanking' 
          src={Banks}
          style={{border: paymentMethod === 'onlineBanking' && '1px solid #5DAC50'}}
        >
          Online Banking
        </PaymentMethod>
        <PaymentMethod
          onFocus={choosePayment}
          onClick={choosePayment} 
          data='creditCards' 
          src={CreditCards}
          style={{border: paymentMethod === 'creditCards' && '1px solid #5DAC50'}}
        >
          Card Payment
        </PaymentMethod>
        <PaymentMethod
          onFocus={choosePayment}
          onClick={choosePayment} 
          data='ApplePay' 
          src={ApplePay}
          style={{border: paymentMethod === 'ApplePay' && '1px solid #5DAC50'}}
        >
          Apple Pay
        </PaymentMethod>
      </Container>
      <Button 
        width='100%' 
        height='4.1rem' 
        border='#92ad8c' 
        shadow='#333' 
        background=' #6B8067'
        color='#FFFFFF'
        onClick={payOrder}
        data-type='continueBtn'
      >
        Continue
      </Button> 
    </>
  )
}

export default PaymentPanel
