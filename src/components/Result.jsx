import React from 'react'
import "./result.css"

function Result({data}) {
  return (
    <div className='result'>
      <div className='result-img'>
        <img src={data.image} alt="" />
      </div>
      <div className='content'>
        <h4>{data.title}</h4>
        <h6>{data.text} </h6>
      </div>
      <div className='price'>
        <h5>{data.price}</h5>
        <h5>{data.currency}</h5>
      </div>
    </div>
  )
}

export default Result
