import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../Helpers/Button'
import Image from '../Helpers/Image'
import Select from '../Helpers/Select'

const Card = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 297.32px;
  height: 373px;
  background: #FFFFFF;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.05);
`
const Description = styled.div`
  grid-row: 2 / 3;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  padding: 0 1.5rem 1.5rem 1.5rem;

  & h3 {
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    font-weight: 400;
    grid-column: span 2;
  }

  & > div {
    grid-row: 2 / 3;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & label {
      margin-right: 8px;
    }
  }

  & h2 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 21px;
    grid-column: span 2;
  }

  & a {
    grid-column: span 2;
    width: 100%;
    height: 100%;
    background: #6B8067;
    color:#FFFFFF;
    border-radius: 4.50483px;
  }
`

const sizeOptions = ['41', '37', '50'];
const quantity = ['1', '2', '3', '4', '5'];

const SkeakersListItem = ({ thumb, description, currency, price, id }) => {

  return (
    <li>
      <Card>
        <Image alt={description} src={thumb} />
        <Description>
          <h3>{description}</h3>
          <Select 
            id={id}
            label={'Size'}
            options={sizeOptions}
          />
          <Select 
            id={id + 1}
            label={'Quantity'}
            options={quantity}
          />
          <h2>{`${currency} ${price}`}</h2>
          <Link to={`/checkout/${id}`}>
            <Button 
              width='100%' 
              height='100%' 
              border='#92ad8c' 
              shadow='#333' 
              background=' #6B8067'
              color='#FFFFFF'
            >
              Add to cart
            </Button>
          </Link>
        </Description>
      </Card>
    </li>
  )
}

export default SkeakersListItem
