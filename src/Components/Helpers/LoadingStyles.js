import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
   to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  height: 80px;
  width: 80px;
  border: 5px solid #ddd;
  border-radius: 50%;
  animation: ${rotate} 1s infinite linear;
  
  & span {
    display: block;
    width: 17px;
    height: 17px;
    background: #ddd;
    border-radius: 50%;
    margin: 11px;
  }
`