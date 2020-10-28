import React from 'react'
import styled from 'styled-components'
import { ReactComponent as SearchButton } from '../../Assets/search.svg'

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
  }
`

const SearchBar = ({ type, id, placeholder }) => {

  const [value, setValue] = React.useState('');

  const handleChange = ({ target }) => setValue(target.value);

  return (
    <Container>
      <ButtonBar><SearchButton /></ButtonBar>
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
