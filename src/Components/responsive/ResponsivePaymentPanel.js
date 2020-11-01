import React from 'react'
import { Wrapper, Title } from './ResponsivePaymentPanelStyles'
import PaymentPanel from '../Checkout/PaymentPanel'

const ResponsivePaymentPanel = () => {
  return (
    <>
      <Title>Payment</Title>
      <Wrapper margin='2rem 1.4rem 2rem 1.4rem'>
        <PaymentPanel />
      </Wrapper>
    </>
  )
}

export default ResponsivePaymentPanel
