import styled from 'styled-components'

export const Wrapper = styled.div`
  background: rgba(0,0,0,.7);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ModalWarning = styled.div`
  height: 12rem;
  width: 44rem;
  border-radius: .3rem;
  background: #E5E5E5;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-20rem);
  opacity: 0;
  animation: slide .4s forwards;
  
  @keyframes slide {
    to {
      transform: initial;
      opacity: 1;
    }
  }
`
export const ModalText = styled.p`
  font-size: 2rem;
  color: #333;
`