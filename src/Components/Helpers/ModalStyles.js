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
  border-radius: .3rem;
  background: white;
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
    height: 20%;
    width: 100%;
    background: #6B8067;
  }
`
export const ModalText = styled.p`
  font-size: 2rem;
  margin-top: 4.8rem;
  color: #333;
`