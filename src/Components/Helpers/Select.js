import React from 'react'
import { SelectArea, Label } from './SelectStyles'
import { ProductsContext } from '../../ProductsContext'

const Select = ({ options, id, name, label, setWarning }) => {

  const [value, setValue] = React.useState('');
  const { order, setOrder } = React.useContext(ProductsContext);

  const handleChange = ({ target } ) => {
    setValue(target.value);
    setOrder({...order, [label.toLowerCase()]: target.value});
    setWarning(false);
  };

  return (
    <div>
      <Label id={id} name={name}>{label}</Label>
      <SelectArea 
        id={id} 
        name={name} 
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
