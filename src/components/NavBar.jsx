import { useState } from 'react';
import { useProduct } from '../manage'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {

    const navigate = useNavigate();
    const count = useProduct((state) => state.count)
    const [statusShop, setStatusShop] = useState(true)
    const [statusCart, setStatusCart] = useState(false)

    function handleCart(){
      setStatusCart(true)
      setStatusShop(false)
       navigate('/Cart')
    }

    function handleshop(){
      setStatusCart(false)
      setStatusShop(true)
      navigate('/')
    }

  return (
    
    <div className='nav-bar'>
        <nav>
          <button className='navigate' style={!statusShop ? {background:"black", color: "#f4f1f1"} : {background:"#f4f1f1", color:"black"}} onClick={handleCart}>Cart <span>{count}</span></button>
          <button className='navigate' style={!statusCart ? {background:"black", color: "#f4f1f1"} : {background:"#f4f1f1", color:"black"}} onClick={handleshop}>Shop</button>

        </nav>
    </div>
  )
}
