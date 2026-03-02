import React, { useEffect, useState } from 'react'
import { useProduct } from '../manage'
import { useNavigate } from 'react-router-dom'

export default function Cart() {

    const navigate = useNavigate();
    const [status, setStatuse] = useState(true)

    const count = useProduct((state) => state.count)
    const products = useProduct((state) => state.products)
    const sumPrice = useProduct((state) => state.sumPrice)

        function handleshop(){
        navigate('/')
    }



  return (
    <div className='cart-page'>
        <button onClick={handleshop}>{sumPrice}</button>
        <p>{count}</p>


    </div>
  )
}
