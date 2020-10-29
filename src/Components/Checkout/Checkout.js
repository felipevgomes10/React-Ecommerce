import React from 'react'
import styled from 'styled-components'
import { ProductsContext } from '../../ProductsContext'
import BreadCrumbs from '../Helpers/BreadCrumbs'

const SectionCart = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  justify-content: center;
  align-items: center;

  & div:first-child {
    grid-row: 1 /2;
    grid-column: span 2;
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

  const handleNext = () => {
    if (steps < 2) setSteps(steps + 1);
  }

  const handlePrev = () => {
    if (steps === 2 ) setSteps(steps - 1);
  }

  return (
    <SectionCart>
      <BreadCrumbs ref={BreadCrumbsRef}/>
      <button onClick={handleNext} style={{gridRow: '2/3', gridColumn: '1/2'}}>Continuar</button>
      <button onClick={handlePrev} style={{gridRow: '2/3', gridColumn: '2/3'}}>Voltar</button>
    </SectionCart>
  )
}

export default Checkout
