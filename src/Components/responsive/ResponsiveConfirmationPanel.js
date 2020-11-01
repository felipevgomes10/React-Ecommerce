import React from 'react'
import { Wrapper } from './ResponsiveConfirmationPanelStyles'
import { ProductsContext } from '../../ProductsContext'
import Bank from '../../Assets/bank.png'
import Button from '../Helpers/Button'
import { Helmet } from 'react-helmet'

const ResponsiveConfirmationPanel = () => {

  const { order } = React.useContext(ProductsContext);

  return (
    <>
      <Helmet>
        <title>Sneakers | Review and Confirmation</title>
        <meta name='description' content='the last step to get your sneakers is to place the order'/>
      </Helmet>
      <Wrapper>
        <h1>Payment method</h1>
        <div>
          <img src={Bank} alt="bank"/>
          <p>{order.method}</p>
        </div>
        <div>
          <p>Total cost</p>
          <small>Delivery included</small>
          <span>$ {order.price}</span>
        </div>
      </Wrapper>
      <Button 
        width='92%' 
        height='5.1rem' 
        border='#92ad8c' 
        shadow='#333' 
        background=' #6B8067'
        color='#FFFFFF'
        data-type='placeOrder'
      >
        Place order
      </Button>
    </>
  )
}

export default ResponsiveConfirmationPanel
