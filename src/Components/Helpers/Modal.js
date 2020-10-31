import React from 'react'
import { Wrapper, ModalWarning, ModalText} from './ModalStyles'

const Modal = ({ text, onClick }) => {

  return (
    <Wrapper onClick={onClick}>
      <ModalWarning>
        <div></div>
        <ModalText>{text}</ModalText>
      </ModalWarning>
    </Wrapper>
  )
}

export default Modal
