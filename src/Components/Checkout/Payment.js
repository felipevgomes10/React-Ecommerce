import React from 'react'
import styled from 'styled-components'
import { ProductsContext } from '../../ProductsContext'
import ConfirmationPanel from './ConfirmationPanel'
import PaymentPanel from './PaymentPanel'

const PaymentWrapper = styled.section`
  background: #F7F7F7;
  border-radius: 10.8766px;
  max-width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 1fr;
  padding: 2.9rem;

  & button[data-type='continueBtn'] {
    grid-column: 2 / 3;
  }
`
const Cost = styled.div` 
  display: grid;
  grid-template-rows: repeat(2, min-content);
  grid-template-columns: 65% max-content;
  align-items: center;
  font-size: 1.6rem;
  margin-top: 1.4rem;

  & p:first-of-type {
    color: #000000;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }

  & p:nth-of-type(2) {
    color: #A5A5A5;
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }

  & p:nth-of-type(3) {
    font-size: 3.35rem;
    color: #000000;
    grid-row: span 2;
    grid-column: 2 / 3;
  }
`
const Container = styled.div`
  grid-row: ${({ rows }) => rows };
  grid-column: ${({ columns }) => columns };
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  font-family: Open Sans;
  color: #000000;
`
const Text = styled.p`
  font-size: 2.2rem;
`
const ProductName = styled.p`
  font-size: 1.6rem;
  margin-top: 1.9rem;
`
const Details = styled.small`
  font-size: 1.6rem;
  color: #A5A5A5;
  margin-top: .7rem;
`

const Payment = ({ steps, setSteps }) => {

  const { order } = React.useContext(ProductsContext);

  React.useEffect(() => {
    window.PayWithMyBank.addPanelListener(function(command, event) {
      if (command === 'event' && event.type === 'new_location') {
        if (event.data.indexOf('#success') === 0) {
          alert('success!');
          setSteps(2);
          
        } else {
          alert('cancel!');
        }
        return false;
      }
    });
  }, [setSteps]);

  if (steps === 2) return <ConfirmationPanel />
  return (
    <PaymentWrapper>
      <Container rows='1 / 2' columns='1 / 2'>
        <Text>Cart Total</Text>
        <ProductName>{order.name}</ProductName>
        <Details>{`X ${order.quantity} ${order.color} Size ${order.size}`}</Details>
        <Details>{`Item #${order.id}`}</Details>
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
