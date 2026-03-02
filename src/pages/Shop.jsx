import React from 'react'
import Card from '../components/Card'
import data from '../../public/data.json'
import { useProduct } from '../manage'

export default function Shop() {

    const count = useProduct((state) => state.count)

    
    
  return (
    <div>
        <nav>
            {count}
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
