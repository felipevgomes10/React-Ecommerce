import styled, { keyframes } from 'styled-components'

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

const slide = keyframes`
  to {
    transform: initial;
    opacity: 1;
  }
`
export const ModalWarning = styled.div`
  height: 17rem;
  width: 34rem;
  border: 1px solid #eee;
  border-radius: 1.3rem;
  background: #6B8067;
  box-shadow: 0 0 0 2px #333;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  transform: translateY(-20rem);
  opacity: 0;
  animation: ${slide} .4s forwards;

  & div {
    height: 24%;
    width: 100%;
    background: #000;
    margin-top: 2rem;
  }
`
export const ModalText = styled.p`
    font-size: 2rem;
    margin-top: 1.8rem;
    border-radius: 0.2rem;
    color: #333;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 92%;
    height: 3.5rem;
`