import React from 'react'

export default function Card({id, name, price, category, description, image}) {
    
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
                <span>Not in cart</span>
            </div>
            <br />
            <button>Add to cart</button>

        </div>
    </div>
  )
}
