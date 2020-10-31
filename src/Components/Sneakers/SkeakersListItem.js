import React from 'react'
import { Card, Description, Warning } from './SkeakersListItemStyles'
import { useNavigate } from 'react-router-dom'
import { ProductsContext } from '../../ProductsContext'
import Button from '../Helpers/Button'
import Image from '../Helpers/Image'
import Select from '../Helpers/Select'

const sizeOptions = ['41', '37', '50'];
const quantity = ['1', '2', '3', '4', '5'];

const SkeakersListItem = ({ thumb, description, currency, price, id }) => {

  const { setSteps, order } = React.useContext(ProductsContext);
  const [ warning, setWarning ] = React.useState(false);
  const navigate = useNavigate();

  const handleSteps = () => {
    if (order.size && order.quantity) {
      setSteps(1);
      navigate(`/checkout/${id}`)
    } else {
      setWarning(true);
    }
  }

  return (
    <li>
      <Card>
        <Image alt={description} src={thumb} />
        <Description>
          <h3>{description}</h3>
          <Select 
            id={id}
            label='Size'
            name='size'
            options={sizeOptions}
            setWarning={setWarning}
          />
          <Select 
            id={id + 1}
            label='Quantity'
            name='quantity'
            options={quantity}
            setWarning={setWarning}
          />
          <h2>{`${currency} ${price}`}</h2>
            <Button 
              width='100%' 
              height='100%' 
              border='#92ad8c' 
              shadow='#333' 
              background=' #6B8067'
              color='#FFFFFF'
              onClick={handleSteps}
            >
              Add to cart
            </Button>
            <Warning warning={warning}>Fill in the fields</Warning>
        </Description>
      </Card>
    </li>
  )
}

export default SkeakersListItem
