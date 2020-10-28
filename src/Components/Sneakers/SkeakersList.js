import React from 'react'
import styled from 'styled-components'
import Select from '../Helpers/Select'

const Card = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 297.32px;
  height: 373px;
  background: #FFFFFF;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.05);
`
const Thumb = styled.img`
  grid-row: 1 / 2;
`
const Description = styled.div`
  grid-row: 2 / 3;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  justify-items: center;
  align-items: center;

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
`

const sizeOptions = ['41', '37', '50'];
const quantity = ['1', '2', '3', '4', '5'];

const SkeakersList = ({ thumb, description, currency, price, id, label, options }) => {

  return (
    <li>
      <Card>
        <Thumb src={thumb} />
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
        </Description>
      </Card>
    </li>
  )
}

export default SkeakersList
