import React from 'react'
import Card from '../components/Card'
import data from '../../public/data.json'

export default function Shop() {
  
  return (
    <div>
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
