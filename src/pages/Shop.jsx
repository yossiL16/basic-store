import React from 'react'
import Card from '../components/Card'
import data from '../../public/data.json'
import { useProduct } from '../manage'
import { useNavigate } from 'react-router-dom'

export default function Shop() {

    const navigate = useNavigate();
    const count = useProduct((state) => state.count)

    function handleCart(){
        navigate('/Cart')
    }


    
    
  return (
    <div>
        <nav>
            <button onClick={handleCart}>{count}</button>
        </nav>
        {data.map((item) => {
            return (
                <Card 
                key={item.id}
                id={item.id} 
                name={item.name} 
                price={item.price}
                category={item.category}
                description={item.description}
                image={item.image}  />
            )
        })}
    
    </div>
  )
}
