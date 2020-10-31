import React from 'react'
import { Wrapper, Div, Img } from './ImageStyles'

const Image = ({ alt, ...props }) => {
  
  const [skeleton, setSkeleton] = React.useState(true)

  const handleLoad = ({ target }) => {
    target.style.opacity = 1;
    setSkeleton(false);
  }

  return (
    <Wrapper>
      {skeleton && <Div></Div>}
      <Img onLoad={handleLoad} alt={alt} {...props}/>
    </Wrapper>
  )
}

export default Image
