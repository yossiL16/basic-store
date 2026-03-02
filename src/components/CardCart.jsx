import React from 'react'
import { useProduct } from '../manage'

export default function CardCart({id, name, price, category}) {

    let removeProduct = useProduct((state) => state.removeProduct)
    const dec = useProduct((state) => state.dec)
    const decPrice = useProduct((state) => state.decPrice)

   function handleClick(){
        removeProduct(id)
        dec()
        decPrice(price)
   }

  return (
    <div className='card-cart'>
        <h1>{name}</h1>
        <p>{category}</p>
        <h2>{price}</h2>
        <button onClick={handleClick}>Remove from cart</button>
    </div>
  )
}
