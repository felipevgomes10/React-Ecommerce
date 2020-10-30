import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../ProductsContext'
import Image from '../Helpers/Image';

const SectionPhoto = styled.section`
  grid-row: 2 / 3;
  grid-column: 1 / 2;
`

const Photo = () => {

  const { id } = useParams();
  const { products, loading, order, setOrder } = React.useContext(ProductsContext);
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {

    const foundProduct = products.find((skeaker) => id === skeaker.id);
    setProduct(foundProduct);

  }, [products, id]);

  React.useEffect(() => {

    if (product) {
      const { description, color, id, price } = product;

      setOrder((order) => {
        return {
          ...order, 
          name: description, 
          color: color, 
          id: id,
          price: (price * order.quantity).toFixed(2),
        }
      });
    }
    
  }, [product, setOrder]);

  React.useEffect(() => {
    window.localStorage.setItem('order', JSON.stringify(order));
  }, [order]);
  
  if (!product) return null
  if (loading) return <p>Loading...</p>
  return (
    <SectionPhoto>
      <Image alt={product.description} src={product.maxresURL} />
    </SectionPhoto>
  )
}

export default Photo
