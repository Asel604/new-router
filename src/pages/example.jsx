
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import apiClient from '../axios/apiClient'

function Example() {
 
    
 
  const [example,setExample] = useState([])
  const[active,setActive] = useState(false)
  async function getExample() {
    try {
      const res = await apiClient.get("/example")
      console.log(res);
      setExample(res.data)
      
    } catch (error) {
      console.log(error);
      
    } 
    
  }
  useEffect(()=>{
    getExample()
  },[active])

  async function deleteExample(id) {
    try {
      const res = await apiClient.delete(`/example/${id}`)
      console.log(res.data);
      setActive(!active)
  
    } catch (error) {
      console.log(error);
      
    }
    
  }
  return (
    <div>
      main
      <div>
      <Link to="/CreateExample">
      <button>Create Example</button></Link>
     
      {example?.map((item)=>(
        <div key={item.id} >
          <h3>{item.title}</h3>
            <img src={item.images} alt="" />
            <button onClick={()=>deleteExample(item.id)}>Delete</button>
        </div>
      ))}
       </div>
    </div>
  )
}


export default Example
