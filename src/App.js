import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProductsStorage } from './ProductsContext'
import Header from './Components/Header'
import Sneakers from './Components/Sneakers'
import Checkout from './Components/Checkout/Checkout'

const App = () => {
  return (
    <div>
      <ProductsStorage>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Sneakers />} />
            <Route path='/checkout/:id' element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </ProductsStorage>
    </div>
  )
}

export default App
