import React, { useState } from 'react'
import { useProduct } from '../manage';


export default function Card({id, name, price, category, description, image}) {
    const [status, setStatuse] = useState(true)
    const count = useProduct((state) => state.count)
    let products = useProduct((state) => state.products)
    const addProduct = useProduct((state) => state.addProduct)
    let removeProduct = useProduct((state) => state.removeProduct)
    const add = useProduct((state) => state.add)
    const dec = useProduct((state) => state.dec)

    function hanleButton(){
        const item = { id, name, category, price }        

        if(!status) {
            removeProduct(id)
            setStatuse(true) 
            dec()
        } else {
            addProduct(item)
            setStatuse(false)
            add()
        }
        console.log(products);
        
        
    }

  return (
    <div className='crad'>
        <div className='image-item'>
            {image}
        </div>
        <div className='data-item'>
            <p>{category}</p>
            <h2>{name}</h2>
            <p>{description}</p>
            <div className='pric-item'>
                <span>${price}</span>
                <span>{status ? 'Not in cart' : 'In cart'}</span>
            </div>
            <br />
            <button onClick={hanleButton}>{status ? "Add to cart" : "Remove from cart"}</button>

        </div>
    </div>
  )
}
