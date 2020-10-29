import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import UserImg from '../Assets/user.jpg'

const HeaderContainer = styled.header`
  grid-row: 1 / 2;
  background: #F1F1F1;
`
const Nav = styled.nav`
  height: 100%;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Text = styled.h1`
  font-size: 2.61rem;
  font-weight: normal;
  margin-right: 10rem;
`
const UserPhoto = styled.div`
  border-radius: 50%;
  width: 34.81px;
  height: 35.21px;
  background: url('${UserImg}') no-repeat center center;
  background-size: cover;
`
const Button = styled.button`
  opacity: ${({ buying }) => buying ? '1' : '0' };
  pointer-events: ${({ buying }) => buying ? 'initial' : 'none'};
  outline: none;
  border: none;
  background:rgba(0, 0, 0, 0.05);
  border-radius: 17.4025px;
  width: 115.29px;
  height: 34.81px;
  font-size: 2.175rem
`


const Header = () => {

  const [buying, setBuying] = React.useState(false);

  return (
    <HeaderContainer>
      <Nav>
        <Button buying={buying}>Back</Button>
        <Link to='/'><Text>Sneakers</Text></Link>
        <UserPhoto />
      </Nav>
    </HeaderContainer>
  )
}

export default Header
