import styled, { keyframes } from 'styled-components'

export const HeaderContainer = styled.header`
  grid-row: 1 / 2;
  grid-column: full-start / full-end;
  background: #F1F1F1;
  padding: 2rem;

  @media (max-width: 25rem) {
    background: white;
    padding: 1rem;
  }
`
export const Nav = styled.nav`
  height: 100%;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 25rem) {
    justify-content: space-between;
  }
`
export const Text = styled.h1`
  font-size: 2.61rem;
  font-weight: normal;
  font-family: Arial, Helvetica, sans-serif;
  margin-right: 8rem;
  text-align: center;
  word-break: break-word;

  @media (max-width: 31.25em) {
    margin-right: 9rem;
  }
`
export const UserPhoto = styled.div`
  border-radius: 50%;
  width: 34.81px;
  height: 35.21px;
  background: ${({ img }) => `url('${img}') no-repeat center center`};
  background-size: cover;
`

const moveLeft = keyframes`
  0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(-3px);
    }
`
export const Button = styled.button`
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

  @media (max-width: 31.25rem) {
    width: 94.29px;
  }

  & svg {
    margin-right: 8.7px;

    @media (max-width: 31.25rem) {
      width: 2rem;
    }
  }

  &:hover svg {
    animation: ${moveLeft} .3s forwards;
  }

  &:hover {
    box-shadow: 0 0 0 1px #333;
  }
`