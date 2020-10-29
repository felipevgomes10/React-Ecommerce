import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
`
const Div = styled.div`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
  background-color: #eee;
  background-size: 200%;
  grid-area: 1/1;
  animation: skeleton .5s infinite linear;

  @keyframes skeleton {
    from {
      background-position: 0px;
    }
    to {
      background-position: -200%;
    }
  }
`
const Img = styled.img`
  opacity: 0;
  max-width: 100%;
  grid-area: 1/1;
  transition: .2s;
`

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
