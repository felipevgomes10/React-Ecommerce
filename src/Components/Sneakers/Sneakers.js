import React from 'react'
import SearchBar from './SearchBar'
import styled from 'styled-components'
import SneakersList from './SkeakersList'
import { ProductsContext } from '../../ProductsContext'
import useMedia from '../Hooks/useMedia'

const Section = styled.section`
  display: grid;
  grid-template-rows: auto 1fr;

  & ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, 297.32px);
    justify-content: center;
    justify-items: center;
    align-items: center;
    gap: ${({ match }) => match ? '4rem' : '8.4rem'};
    width: 80%;
    margin: 57px auto;
  }
`

const Sneakers = () => {

  const { products, loading } = React.useContext(ProductsContext);
  const match = useMedia('(max-width: 900px)');

  return (
    <Section match={match}>
      <SearchBar 
        type='text' 
        id='searchBar' 
        placeholder='Search for your sneaker'
      />
      <ul>
        {loading ? <p>Loading...</p> : products.map(product => (
            <SneakersList 
              key={product.id}
              id={product.id}
              thumb={product.thumbnailURL}
              description={product.description}
            />
          ))}
      </ul>
    </Section>
  )
}

export default Sneakers
