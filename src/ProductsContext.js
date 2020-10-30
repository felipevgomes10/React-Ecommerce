import React from 'react'

export const ProductsContext = React.createContext();

export const ProductsStorage = ({ children }) => {

  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [buying, setBuying] = React.useState(false);
  const [steps, setSteps] = React.useState(0);
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

      let response;
      let json;

      try {
        setError(null);
        setLoading(true);
        response = await fetch(productsUrl);
        if (!response.ok) throw new Error('Sorry, there has been a mistake');
        json = await response.json();
      } catch (err) {
        json = null;
        setError(err.message);
      } finally {
        setLoading(false);
        setProducts(json.results);
      }
    }
    fetchProductsFunction();
  }, []);

  return (
    <ProductsContext.Provider value={{products, setProducts, loading, error, buying, setBuying, order, setOrder, steps, setSteps}}>
      {children}
    </ProductsContext.Provider>
  )
}
