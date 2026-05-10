import { useState } from 'react'
import Header from './components/Header'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import './App.css'
import GenreMovieList from './components/GenreMovieList'
 
function App() {

  return (
    <>
      <div className='w-full overflow-x-hidden'>
        <Header />
        <Slider />
        <ProductionHouse />
        <GenreMovieList />
      </div>
    </>
  )
}

export default App
