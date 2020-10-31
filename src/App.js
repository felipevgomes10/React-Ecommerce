import React from 'react'
import { GlobalStyles } from './GlobalStyles'
import { Container } from './AppStyles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProductsStorage } from './ProductsContext'
import Header from './Components/Header'
import Sneakers from './Components/Sneakers/Sneakers'
import Checkout from './Components/Checkout/Checkout'

const App = () => {

  return (
    <>
      <GlobalStyles />
      <Container>
        <ProductsStorage>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<Sneakers />} />
              <Route path='/checkout/:id/*' element={<Checkout />} />
            </Routes>
          </BrowserRouter>
        </ProductsStorage>
      </Container>
    </>
  )
}

export default App
