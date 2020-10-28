import React from 'react'
import SearchBar from './SearchBar'

const Sneakers = () => {
  return (
    <section>
      <SearchBar 
        type='text' 
        id='searchBar' 
        placeholder='Search for your sneaker'
      />
    </section>
  )
}

export default Sneakers
