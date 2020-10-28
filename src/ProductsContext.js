import React from 'react'

export const ProductsContext = React.createContext();

export const ProductsStorage = ({ children }) => {

  const [products, setProducts] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

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
        setProducts(json);
      }
    }
    fetchProductsFunction();
  }, []);

  return (
    <ProductsContext.Provider value={{products, loading, error}}>
      {children}
    </ProductsContext.Provider>
  )
}
