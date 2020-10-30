import React from 'react'
import styled from 'styled-components'
import { ProductsContext } from '../../ProductsContext'

const SelectArea = styled.select`
  border: 0.900966px solid #E8E8E8;
  box-sizing: border-box;
  border-radius: 25.2271px;
  color: #808080;
  font-size: 12px;
  line-height: 18px;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  padding: .5rem;
`
const Label = styled.label`
  font-family: Open Sans;
  font-size: 12px;
  line-height: 18px;
  color: #808080;
`

const Select = ({ options, id, name, label }) => {

  const [value, setValue] = React.useState('');
  const { order, setOrder } = React.useContext(ProductsContext);

  const handleChange = ({ target } ) => {
    setValue(target.value);
    setOrder({...order, [label.toLowerCase()]: target.value});
  };

  return (
    <div>
      <Label id={id} name={name}>{label}</Label>
      <SelectArea 
        id={id} 
        name={id} 
        value={value} 
        onChange={handleChange}
      >
        <option disabled value=''>Pick</option>
        {options.map((option, index) => <option key={index}>{option}</option>)}
      </SelectArea>
    </div>
  )
}

export default Select
