import React from 'react'
import { Section } from './SneakersStyles'
import SearchBar from './SearchBar'
import SkeakersListItem from './SkeakersListItem'
import { ProductsContext } from '../../ProductsContext'
import useMedia from '../Hooks/useMedia'
import Button from '../Helpers/Button'
import useFetch from '../Hooks/useFetch'
import { Helmet } from 'react-helmet'
import Loading from '../Helpers/Loading'

const Sneakers = () => {

  React.useEffect(() => {
    window.localStorage.removeItem('savedOrder');
  }, []);

  const { 
    products, 
    setProducts, 
    loading, 
    setBuying,
  } = React.useContext(ProductsContext);
  const [searched, setSearched] = React.useState(false);
  const match = useMedia('(max-width: 900px)');
  const { request } = useFetch();
  const [filter, setFilter] = React.useState(null);

  React.useEffect(() => {
    setBuying(false);
  }, [setBuying]);

  const productsUrl = 'https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json';

  const handleClick = async () => {
    const { response, json } = await request(productsUrl);
    const sneakers = json.results.map((result) => {
      return {
        ...result,
        color: result.color.toLowerCase(),
      }
    });
    if (response.ok) setProducts(sneakers);
    setSearched(false);
    setFilter(null);
  }

  return (
    <Section match={match}>
      <Helmet>
        <title>Sneakers | Buy the best sneakers here</title>
        <meta name='description' content='you will find the most beautiful sneakers here'/>
      </Helmet>
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
        setFilter={setFilter}
        searched={searched}
        type='text' 
        id='searchBar' 
        placeholder='Search for your sneaker'
        setSearched={setSearched}
      />
      <ul>
        {loading && <Loading />}
        {filter ? filter.map(({ id, thumbnailURL, description, currency, price }) => {
          return <SkeakersListItem 
          key={id}
          id={id}
          thumb={thumbnailURL}
          description={description}
          currency={currency}
          price={price}
        />
        }) : (
          products.map(({ id, thumbnailURL, description, currency, price }) => {
            return <SkeakersListItem 
                      key={id}
                      id={id}
                      thumb={thumbnailURL}
                      description={description}
                      currency={currency}
                      price={price}
                    />
          })
        )}
      </ul>
    </Section>
  )
}

export default Sneakers
