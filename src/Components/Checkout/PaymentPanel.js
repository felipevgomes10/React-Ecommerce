import React from 'react'
import { Container, MethodHeader } from './PaymentPanelStyles'
import PaymentMethod from './PaymentMethod'
import Banks from '../../Assets/banks.png'
import CreditCards from '../../Assets/credit-cards.png'
import ApplePay from '../../Assets/apple-pay.png'
import Button from '../Helpers/Button'
import { ProductsContext } from '../../ProductsContext'
import { establishConnection } from './establishConnection'

const PaymentPanel = () => {

  const [paymentMethod, setPaymentMethod] = React.useState('Online Banking');
  const { order, setOrder } = React.useContext(ProductsContext);

  React.useEffect(() => {
    setOrder((order) => {
      return {...order, method: paymentMethod}
    });
  }, [paymentMethod, setOrder]);

  const choosePayment = ({ target }) => {
    const paymentType = target.dataset.type;
    setPaymentMethod(paymentType);
  }

  const payOrder = () => {
    if (paymentMethod === 'Online Banking') {
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
          data='Online Banking' 
          src={Banks}
          style={{border: paymentMethod === 'Online Banking' && '1px solid #5DAC50'}}
        >
          Online Banking
        </PaymentMethod>
        <PaymentMethod
          onFocus={choosePayment}
          onClick={choosePayment} 
          data='Credit Cards' 
          src={CreditCards}
          style={{border: paymentMethod === 'Credit Cards' && '1px solid #5DAC50'}}
        >
          Card Payment
        </PaymentMethod>
        <PaymentMethod
          onFocus={choosePayment}
          onClick={choosePayment} 
          data='Apple Pay' 
          src={ApplePay}
          style={{border: paymentMethod === 'Apple Pay' && '1px solid #5DAC50'}}
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
