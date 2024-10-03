import React from 'react'
import "./card.css"
import { Link } from 'react-router-dom';
function Card({data}) {
  let discountPercentage = null;
 if(data.discount && typeof data.discount === 'boolean' && data.discountedPrice) {discountPercentage =((data.price - data.discountedPrice)/data.price)*100 }

  return (
    <Link to={`/product/${data.id}`} className='product'>
      <div className='product-image'>
        <img src={data.image} alt="" />
        {data.discount && discountPercentage !== null &&(
      <div className='discount'>{discountPercentage.toFixed(0)}%</div>)}
      </div>
      <div className='product-content'>
        <h3>{data.title}</h3>
        <p>{data.rating}</p>
      </div>
      <div className='price'>{data.discount ?( <>
      <p className='p1' style={{textDecoration: 'line-through', color: '#cc2e2e'}}>{data.price}</p>
      <p className='p2' style={{color: 'rgb(13, 125, 32)', marginLeft:'100px'}}>{data.discountedPrice}</p>
      </> ):( <p className='p1' style={{color: 'rgb(13, 125, 32)'}}>
        {data.price}
      </p>)}
      </div>
    </Link>
  )
}

export default Card
// || ili