import React from 'react'
import { Container, Bar, ButtonBar } from './SearchBarStyles'
import { ReactComponent as SearchButton } from '../../Assets/search.svg'
import { ProductsContext } from '../../ProductsContext'

const SearchBar = ({ type, id, placeholder, setSearched, searched, setFilter }) => {

  const { products } = React.useContext(ProductsContext);
  const barRef = React.useRef();

  const handleSearch = React.useCallback(() => {
    const word = barRef.current.value
    const filteredProduct = products.filter(({ color, price }) => {
      return color.includes(word) || price.replace(/\.\d+/g, '').includes(word);
    });
    setFilter(filteredProduct);
    setSearched(true);
  }, [products, setFilter, setSearched]);

  const handleClick = () => {
    if (barRef.current.value.length !== 0)
      handleSearch();
  }

  React.useEffect(() => {

    const handleKeyPress = ({ key }) => {
      if ((key === 'Enter') && (barRef.current.value.length !== 0)) {
        handleSearch();
      }
    }

    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    }

  }, [handleSearch]);

  React.useEffect(() => {
    if (searched === false) barRef.current.value = '';
  }, [searched]);

  return (
    <Container>
      <ButtonBar onClick={handleClick}><SearchButton /></ButtonBar>
      <Bar 
        type={type} 
        id={id}
        name={id} 
        placeholder={placeholder}
        ref={barRef}
      />
    </Container>
  )
}

export default SearchBar
