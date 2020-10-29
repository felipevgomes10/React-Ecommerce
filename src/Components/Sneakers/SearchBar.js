import React from 'react'
import styled from 'styled-components'
import { ReactComponent as SearchButton } from '../../Assets/search.svg'
import { ProductsContext } from '../../ProductsContext'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px auto 0 auto;
  border-bottom: 1px solid #BDBDBD;
  width: 80%;
  padding: 1rem 3.5rem;
`
const Bar = styled.input`
  font-size: 2.4rem;
  font-weight: 300;
  font-family: 'Open Sans', sans-serif;
  border: none;
  outline: none;
  background: transparent;
  flex: 1;
  text-align: center;
  margin-right: 4.5rem;
  text-transform: capitalize;
`
const ButtonBar = styled.button`
  outline: none;
  border: none;
  background: transparent;
  width: 3.2rem;
  height: 3.2rem;
  flex-shrink: 0;
  cursor: pointer;
  padding: .1rem;

  & > svg {
    height: 100%;
    width: 100%;
    transform-origin: right;
    
    & > path {
      transition: .6s;
    }

    &:hover > path {
      fill: #333;
    }
  }

  &:hover svg {
    animation: shake .3s infinite linear;
  }

  @keyframes shake {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(-2deg);
    }
    100% {
      transform: rotate(2deg);
    }
  }
`

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
