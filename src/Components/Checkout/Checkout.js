import React from 'react'
import { SectionCart } from './CheckoutStyles'
import { ProductsContext } from '../../ProductsContext'
import BreadCrumbs from '../Helpers/BreadCrumbs'
import Payment from './Payment'
import Photo from './Photo'
import Modal from '../Helpers/Modal'
import { Helmet } from 'react-helmet'

const Checkout = () => {

  const { setBuying, steps, setSteps } = React.useContext(ProductsContext);
  const BreadCrumbsRef = React.createRef();
  const [showModal, setShowModal] = React.useState(false);
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {

    const handleConfirmation = (command, event) => {
      if (command === 'event' && event.type === 'new_location') {
        if (event.data.indexOf('#success') === 0) {
          setSteps(2);
          setShowModal(true);
          setMessage('Your transaction was successful!');
          window.localStorage.removeItem('savedOrder');
        } else {
          setSteps(1);
          setShowModal(true);
          setMessage('Your transaction failed!');
        }
        return false;
      }
    }

    window.PayWithMyBank.addPanelListener(handleConfirmation);

    return () => {
      window.PayWithMyBank.removePanelListener(handleConfirmation);
    }
  }, [setSteps]);

  const handleModal = ({ target, currentTarget }) => {
    if (target === currentTarget) setShowModal(!showModal);
  }
  
  React.useEffect(() => {
    setBuying(true);
  }, [setBuying]);

  React.useEffect(() => {
    const { current } = BreadCrumbsRef;
    
    if (steps < 2) {
      current.children[0].style.background = '#61CB46';
      current.children[2].style.background = '#61CB46';
      current.children[3].style.background = '#E8E8E8';
      current.children[4].style.width = '30%';
    }
    
    if (steps > 1) {
      current.children[3].style.background = '#61CB46';
      current.children[4].style.width = '60%';
    }

  }, [steps, BreadCrumbsRef]);

  return (
    <SectionCart>
      <Helmet>
        <title>Sneakers | Checkout</title>
        <meta name='description' content='pay your sneakers here using any payment method you like the most'/>
      </Helmet>
      {showModal && <Modal text={message} onClick={handleModal}/>};
      <BreadCrumbs ref={BreadCrumbsRef} />
      <Photo />
      <Payment />
    </SectionCart>
  )
}

export default Checkout
