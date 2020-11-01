import React from 'react'
import useFetch from './Components/Hooks/useFetch'

export const ProductsContext = React.createContext();

export const ProductsStorage = ({ children }) => {

  const [products, setProducts] = React.useState([]);
  const [buying, setBuying] = React.useState(false);
  const [steps, setSteps] = React.useState(0);
  const { request, error, loading } = useFetch();
  const [order, setOrder] = React.useState({
    name: '',
    quantity: '',
    color: '',
    size: '',
    id: '',
    price: '',
    method: '',
  });

  const productsUrl = 'https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json';

  React.useEffect(() => {

    const fetchProductsFunction = async () => {

      const { response, json } = await request(productsUrl);
      const sneakers = json.results.map((result) => {
        return {
          ...result,
          color: result.color.toLowerCase(),
        }
      });
      if (response.ok) setProducts(sneakers);
      }
      
    fetchProductsFunction();

  }, [request]);

  return (
    <ProductsContext.Provider value={{products, setProducts, loading, error, buying, setBuying, order, setOrder, steps, setSteps}}>
      {children}
    </ProductsContext.Provider>
  )
}
