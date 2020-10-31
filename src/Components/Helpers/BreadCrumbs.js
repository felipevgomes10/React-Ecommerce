import React from 'react'
import { Container, Progress, GreenPoint } from './BreadCrumbsStyles'

const BreadCrumbs = React.forwardRef((_, ref) => {
  return (
    <Container className='breadCrumbs' ref={ref}>
      <GreenPoint text='"Cart"' />
      <Progress />
      <GreenPoint type='absolute' left='50%' text='"Payment Options"' />
      <GreenPoint text='"Receipt"'/>
      <Progress green />
    </Container>
  )
})

export default BreadCrumbs
