import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import apiClient from '../axios/apiClient'
 

function Main() {
  const [products,setProducts] = useState([])
  const[active,setActive] = useState(false)
  async function getProduct() {
    try {
      const res = await apiClient.get("/products")
      console.log(res);
      setProducts(res.data)
      
    } catch (error) {
      console.log(error);
      
    } 
    
  }
  useEffect(()=>{
    getProduct()
  },[active])

  async function deleteProduct(id) {
    try {
      const res = await apiClient.delete(`/products/${id}`)
      console.log(res);
      setActive(!active)
  
    } catch (error) {
      console.log(error);
      
    }
    
  }
  return (
    <div>
      main
      <div>
      <Link to="/createProduct">
      <button>Create Products</button></Link>
     
      {products?.map((item)=>(
        <div key={item.id} >
          <h3>{item.title}</h3>
            <img src={item.image} alt="" />
            <button onClick={()=>deleteProduct(item.id)}>Delete</button>
        </div>
      ))}
       </div>
    </div>
  )
}

export default Main
