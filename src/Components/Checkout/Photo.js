import React from 'react'
import { SectionPhoto } from './PhotoStyles'
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../ProductsContext'
import Image from '../Helpers/Image';
import Loading from '../Helpers/Loading';

const Photo = () => {

  const { id } = useParams();
  const { products, loading, order, setOrder } = React.useContext(ProductsContext);
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    
    const savedProduct = window.localStorage.getItem('savedOrder');
    if (savedProduct) {
      const parse = JSON.parse(savedProduct);
      setOrder({...parse})
    }
  }, [setOrder]);

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
    window.localStorage.setItem('savedOrder', JSON.stringify(order));
  }, [order]);
  
  if (!product) return null
  if (loading) return <Loading />
  return (
    <SectionPhoto>
      <Image alt={product.description} src={product.maxresURL} />
    </SectionPhoto>
  )
}

export default Photo
