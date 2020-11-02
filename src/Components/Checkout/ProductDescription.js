import React from 'react'
import { SectionPhoto } from './ProductDescriptionStyles'
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../ProductsContext'
import Image from '../Helpers/Image';
import Loading from '../Helpers/Loading';
import useMedia from '../Hooks/useMedia';
import ResponsiveCheckout from '../responsive/ResponsiveCheckout';
import ResponsiveSumary from '../responsive/ResponsiveSumary';

const ProductDescription = () => {

  const { id } = useParams();
  const { products, loading, order, setOrder, steps } = React.useContext(ProductsContext);
  const [product, setProduct] = React.useState(null);
  const media = useMedia('(max-width: 31.25em)');

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
      const { 
        description, 
        color, 
        id, 
        price, 
        maxresURL
      } = product;

      setOrder((order) => {
        return {
          ...order, 
          name: description, 
          color: color, 
          id: id,
          price: (price * order.quantity).toFixed(2),
          img: maxresURL,
        }
      });
    }
    
  }, [product, setOrder]);

  React.useEffect(() => {
    window.localStorage.setItem('savedOrder', JSON.stringify(order));
  }, [order]);
  
  if (!product) return null
  if (loading) return <Loading />
  if (media && (steps === 2)) return <ResponsiveSumary />
  if (media) return (
    <ResponsiveCheckout 
      productPhoto={product.maxresURL}
      productDescription={product.description}
    />
  )
  return (
    <SectionPhoto>
      <Image alt={product.description} src={product.maxresURL} />
    </SectionPhoto>
  )
}

export default ProductDescription
