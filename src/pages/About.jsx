import React from 'react'
import { results } from '../data/results'
import Result from '../components/Result'
import "../components/result.css"





function About() {
  return (
    <div className='results'>{
      results.map((item)=> (
        <Result key={item.id} data={item}/> 
      ))
      }
    </div>
  )
}

export default About
