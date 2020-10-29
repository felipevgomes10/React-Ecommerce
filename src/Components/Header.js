import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import UserImg from '../Assets/user.jpg'
import { ProductsContext } from '../ProductsContext'
import { ReactComponent as Arrow } from '../Assets/arrow.svg'

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
  font-size: 2.175rem;
  cursor: pointer;
  transition: .1s;
  line-height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    margin-right: 8.7px;
  }

  &:hover svg {
    animation: moveLeft .3s forwards;
  }

  @keyframes moveLeft {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(-3px);
    }
  }

  &:hover {
    box-shadow: 0 0 0 1px #333;
  }
`


const Header = () => {

  const { buying } = React.useContext(ProductsContext);
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Nav>
        <Button onClick={() => navigate(-1)} buying={buying}><Arrow /> Back</Button>
        <Link to='/'><Text>Sneakers</Text></Link>
        <UserPhoto />
      </Nav>
    </HeaderContainer>
  )
}

export default Header
