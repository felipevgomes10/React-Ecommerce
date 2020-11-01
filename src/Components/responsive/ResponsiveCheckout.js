import React from 'react'
import styled, { css } from 'styled-components'
import { ProductsContext } from '../../ProductsContext'
import Image from '../Helpers/Image'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 21rem 1fr;
  grid-template-rows: repeat(2, 1fr);

  background: #F7F7F7;
  border-radius: 9.02222px;
  height: 244px;
  margin: ${({ margin }) => margin ? margin : 'initial'};
  transition: .3s;

  & img {
    border-radius: 9.02222px;
    width: 92px;
    height: 106px;
    object-fit: cover;
    margin: 3rem 2rem;
  }
`
const Title = styled.h1`
  margin: 2rem 2rem 0;
  font-size: 3.8rem;
  font-weight: 400;
`
const TextWrapper = styled(Wrapper)`
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, min-content);
  grid-column: ${({ columns }) => columns ? columns : 'initial'};
  grid-row: ${({ rows }) => rows ? rows : 'initial'};
  margin: ${({ margin }) => margin ? margin : 'initial'};
  height: auto;

  & p {
    font-size: ${({ font }) => font ? font : '2rem'};
  }

  & small {
    font-size: 13px;
    color: #A5A5A5;
  }
`
const Colapse = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 23px;
  width: 23px;
  border: none;
  outline: none;
  padding: 0;
  border-radius: 50%;
  position: absolute;
  top: 153px;
  right: 23px;
  background: #A5A5A5;
  cursor: pointer;
`
const Icon = styled.span`
  display: block;
  background: white;
  height: 3px;
  width: 9px;
  position: relative;

  ${props => props.plus && css`
      
      &::before {
        content: '';
        display: block;
        height: 8px;
        width: 3px;
        background: white;
        position: absolute;
        height: 9px;
        width: 3px;
        background: white;
        position: absolute;
        top: -3px;
        left: 2.5px;


      }

  `}
`
const OrderText = styled.p`
  position: absolute;
  top: 152px;
  left: 18px;
  font-size: 18px;
`

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
      [...WrapperRef.current.children].forEach(child => {
        child.style.display = 'none';
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
      <Colapse onClick={handleColapse}>{colapse ? <Icon plus/> : <Icon />}</Colapse>
      {colapse && <OrderText>Order</OrderText>}
      <Wrapper margin='2rem 1.4rem 0rem' ref={WrapperRef}>
        <Image 
          src={productPhoto} 
          alt={productDescription}
        />
        <TextWrapper columns='2 / 3' margin='3rem'>
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
