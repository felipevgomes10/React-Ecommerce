import React from 'react'
import { Wrapper, ModalWarning, ModalText} from './ModalStyles'

const Modal = ({ text, onClick }) => {

  return (
    <Wrapper onClick={onClick}>
      <ModalWarning>
        <ModalText>{text}</ModalText>
      </ModalWarning>
    </Wrapper>
  )
}

export default Modal
