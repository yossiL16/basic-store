import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import NavBar from "./components/NavBar"

function App() {


  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<Shop />} />
      <Route path='/Cart' element={<Cart />}/>
    </Routes>
    
   
    </BrowserRouter>
  )
}

export default App
