import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 66px;
  position: relative;
`
const Progress = styled.span`
  display: block;
  height: 2px;
  width: 60%;
  background: #E8E8E8;
`
const ProgressGreen = styled.span`
  display: block;
  height: 2px;
  width: 30%;
  background: #61CB46;
  position: absolute;
  top: 44%;
  left: 20%;
  transition: 1s;
`
const GreenPoint = styled.span`
  display: block;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: #E8E8E8;
  position: ${({ type }) => type ? type : 'initial' };
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  transition: .3s;
`

const BreadCrumbs = React.forwardRef((_, ref) => {
  return (
    <Container ref={ref}>
      <GreenPoint />
      <Progress />
      <GreenPoint type='absolute' left='50%'/>
      <GreenPoint />
      <ProgressGreen />
    </Container>
  )
})

export default BreadCrumbs
