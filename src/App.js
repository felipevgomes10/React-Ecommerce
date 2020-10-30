import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProductsStorage } from './ProductsContext'
import Header from './Components/Header'
import Sneakers from './Components/Sneakers/Sneakers'
import Checkout from './Components/Checkout/Checkout'
import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 87px 1fr;
`

const App = () => {
  return (
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
  )
}

export default App
