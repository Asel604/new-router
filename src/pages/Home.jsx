import React from 'react'
import { products } from '../data/product'
import Card from '../components/Card'
import "../components/card.css"

function Home() {
  return (
    <div className='products'>
        {
          products.map((item)=>(
            <Card  key ={item.id} data={item}/>
          ))
      
                 
        }
    </div>
  )
}

export default Home
