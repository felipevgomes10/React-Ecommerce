import React from 'react'
import SearchBar from './SearchBar'
import styled from 'styled-components'
import SkeakersListItem from './SkeakersListItem'
import { ProductsContext } from '../../ProductsContext'
import useMedia from '../Hooks/useMedia'
import Button from '../Helpers/Button'
import useFetch from '../Hooks/useFetch'

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

  & > button {
    position: absolute;
    top: 252px;
    left: 146px;
  }
`

const Sneakers = () => {

  const { 
    products, 
    setProducts, 
    loading, 
    setBuying,
   } = React.useContext(ProductsContext);
  const [searched, setSearched] = React.useState(false);
  const match = useMedia('(max-width: 900px)');
  const { request } = useFetch();

  React.useEffect(() => {
    setBuying(false);
  }, [setBuying]);

  const productsUrl = 'https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json';

  const handleClick = async () => {
    const { response, json } = await request(productsUrl);
    if (response.ok) setProducts(json.results);
    setSearched(false);
  }

  return (
    <Section match={match}>
      {searched && <Button
        width='90px' 
        height='30px' 
        border='#333' 
        shadow='#ddd' 
        background=' #F1F1F1'
        color='#333'
        onClick={handleClick}
      >
        Show All
      </Button>}
      <SearchBar
        searched={searched}
        type='text' 
        id='searchBar' 
        placeholder='Search for your sneaker'
        setSearched={setSearched}
      />
      <ul>
        {loading ? <p>Loading...</p> : (
          products.map(({ id, thumbnailURL, description, currency, price}) => {
            return <SkeakersListItem 
                      key={id}
                      id={id}
                      thumb={thumbnailURL}
                      description={description}
                      currency={currency}
                      price={price}
                    />
          }
        ))}
      </ul>
    </Section>
  )
}

export default Sneakers
