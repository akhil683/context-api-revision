import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Checkout from './components/Checkout'
import Home from './components/Home'

const App = () => {
  return (
    <>
      <Header />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
       </Routes>
    </>
  )
}

export default App
