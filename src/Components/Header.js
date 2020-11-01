import React from 'react'
import { HeaderContainer, Nav, Text, UserPhoto, Button } from './HeaderStyles'
import UserImg from '../Assets/user.jpg'
import { useNavigate } from 'react-router-dom'
import { ProductsContext } from '../ProductsContext'
import { ReactComponent as Arrow } from '../Assets/arrow.svg'
import useMedia from './Hooks/useMedia'

const Header = () => {

  const { buying, steps, setSteps, setOrder } = React.useContext(ProductsContext);
  const navigate = useNavigate();
  const [headerText, setHeaderText] = React.useState(null);
  const media = useMedia('(max-width: 25em)');

  React.useEffect(() => {
    
    if (steps === 0) {
      setHeaderText('Sneakers');
    }
    else if(steps === 1) {
      setHeaderText('Checkout');
    } else {
      setHeaderText('Review and Confirmation');
    }

  }, [steps]);

  const handleNavigation = () => {
    setSteps(steps - 1);
    if (steps === 1) {
      navigate('/');
      setOrder({
        name: '',
        quantity: '',
        color: '',
        size: '',
        id: '',
        price: '',
        method: '',
      });
    }
    else {
      navigate(-1);
    }
  }

  return (
    <HeaderContainer>
      <Nav>
        <Button onClick={handleNavigation} buying={buying}><Arrow /> Back</Button>
        {!media && <Text>{headerText}</Text>}
        <UserPhoto img={UserImg} />
      </Nav>
    </HeaderContainer>
  )
}

export default Header
