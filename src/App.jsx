import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Shop from './pages/Shop'
import Cart from './pages/Cart'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/shop' element={<Shop />} />
      <Route path='/Cart' element={<Cart />}/>
    </Routes>
    
   
    </BrowserRouter>
  )
}

export default App
