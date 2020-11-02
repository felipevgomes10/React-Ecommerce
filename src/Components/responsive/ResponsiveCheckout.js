import React from 'react'
import { Wrapper, Title, TextWrapper, Colapse, Icon, OrderText } from './ResponsiveCheckoutStyles'
import { ProductsContext } from '../../ProductsContext'
import Image from '../Helpers/Image'

const ResponsiveCheckout = ({ productPhoto, productDescription }) => {

  const { order } = React.useContext(ProductsContext);
  const WrapperRef = React.useRef();
  const [colapse, setColapse] = React.useState(false);

  const handleColapse = () => {
      setColapse(!colapse);
  }

  React.useEffect(() => {
    if (colapse) {
      WrapperRef.current.style.height = '40px';
      [...WrapperRef.current.children].forEach((child, index) => {
        if (index !== 0) child.style.display = 'none';
      });
    } else {
      WrapperRef.current.removeAttribute('style');
      [...WrapperRef.current.children].forEach(child => {
        child.removeAttribute('style');
      });
    }
  }, [colapse]);

  return (
    <>
      <Title>Checkout</Title>
      <Wrapper margin='2rem 1.4rem 0rem' ref={WrapperRef}>
        <div className='colapse'>
        <Colapse onClick={handleColapse}>{colapse ? <Icon plus/> : <Icon />}</Colapse>
      {colapse && <OrderText>Order</OrderText>}
        </div>
        <Image 
          src={productPhoto} 
          alt={productDescription}
        />
        <TextWrapper columns='2 / 3' rows='1 / 2' margin='3rem'>
          <p>{order.name}</p>
          <small>
            X {order.quantity} {order.color} Size {order.size}
          </small>
          <small>Item #{order.id}</small>
          <TextWrapper margin='1rem 0 0 0' font='1.8rem'>
            <p>Delivery details</p>
            <small>John Smith</small>
            <small>Phone no: 01312428200</small>
            <small>Address: Redwood City, 2000.</small>
          </TextWrapper>
        </TextWrapper>
        <TextWrapper columns='1 / 2' rows='2 / 3' font='1.8rem' margin='0 2rem'>
          <p>Total cost</p>
          <small>Delivery included</small>
        </TextWrapper>
        <TextWrapper columns='2 / 3' rows='2 / 3' font='4rem' margin='-.5rem 0 0 9rem'>
          <p>$ {order.price}</p>
        </TextWrapper>
      </Wrapper>
    </>
  )
}

export default ResponsiveCheckout
