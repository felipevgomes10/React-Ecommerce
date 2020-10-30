import React from 'react'
import styled from 'styled-components'
import { ProductsContext } from '../../ProductsContext'
import BreadCrumbs from '../Helpers/BreadCrumbs'
import Payment from './Payment'
import Photo from './Photo'

const SectionCart = styled.section`
  display: grid;
  grid-template-columns: 40% 1fr;
  grid-template-rows: auto min-content;
  justify-content: center;
  align-items: center;
  column-gap: 10rem;

  & > div:first-of-type {
    grid-column: span 2;
    margin-top: 6.6rem;
    margin-bottom: 8.6rem;
  }

  & > section:first-of-type {
    height: 100%;
    padding: 0 0 5rem 5rem;

    & div {
      height: 100%;
      border-radius: 10.8766px;
      overflow: hidden;
    }

    & * {
      width: 100%;
      height: 63rem;
      object-fit: cover;
    }
  }

  & > section:nth-of-type(2) {
    width: 100%;
    height: 63rem;
    justify-self: center;
    align-self: stretch;
    margin-right: 9rem;
  }
`

const Checkout = () => {

  const { setBuying } = React.useContext(ProductsContext);
  const [steps, setSteps] = React.useState(1);
  const BreadCrumbsRef = React.createRef();
  
  React.useEffect(() => {
    setBuying(true);
  }, [setBuying]);

  React.useEffect(() => {
    const { current } = BreadCrumbsRef;
    
    if (steps < 2) {
      current.children[0].style.background = '#61CB46';
      current.children[2].style.background = '#61CB46';
      current.children[3].style.background = '#E8E8E8';
      current.children[4].style.width = '30%';
    }
    
    if (steps > 1) {
      current.children[3].style.background = '#61CB46';
      current.children[4].style.width = '60%';
    }

  }, [steps, BreadCrumbsRef]);

  return (
    <SectionCart>
      <BreadCrumbs ref={BreadCrumbsRef} />
      <Photo />
      <Payment steps={steps} setSteps={setSteps} />
    </SectionCart>
  )
}

export default Checkout
