import React from 'react'
import { Container, Bar, ButtonBar } from './SearchBarStyles'
import { ReactComponent as SearchButton } from '../../Assets/search.svg'
import { ProductsContext } from '../../ProductsContext'

const SearchBar = ({ type, id, placeholder, setSearched, searched }) => {

  const [value, setValue] = React.useState('');
  const { products, setProducts } = React.useContext(ProductsContext);

  const handleChange = ({ target }) => setValue(target.value);

  const handleClick = () => {
    const filteredProduct = products.filter(({ price, color }) => {
      return value === price || value === color;
    });
    setProducts(filteredProduct);
    setSearched(true);
  }

  React.useEffect(() => {
    if (searched === false) setValue('');
  }, [searched]);

  return (
    <Container>
      <ButtonBar onClick={handleClick}><SearchButton /></ButtonBar>
      <Bar 
        type={type} 
        id={id}
        name={id} 
        placeholder={placeholder} 
        value={value} 
        onChange={handleChange}
      />
    </Container>
  )
}

export default SearchBar
