import React, { useState } from 'react'


export default function Card({id, name, price, category, description, image}) {
    const [status, setStatuse] = useState(true)

    function hanleButton(){
        
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
            <button>{status ? "Add to cart" : "Remove from cart"}</button>

        </div>
    </div>
  )
}
