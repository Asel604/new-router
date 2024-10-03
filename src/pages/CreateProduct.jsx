import React,{useState} from 'react'
import apiClient from '../axios/apiClient'

function CreateProduct() {
    const[title,setTitle] = useState("")
    const[price,setPrice] =useState(0)
    const[discount,setDiscount]=useState(0)
    const[image,setImage] = useState("");

    async function sendProduct() {
        const payload={
            title:title,
            price:price,
            discount:discount,
            image:image
        }
        try {
            const res = await apiClient.post("/products",payload)
            console.log(res);
            
        } catch (error) {
           console.log(error);
            
        }
        
    }
  return (
    <div>Create Product
        <input value={title} onChange={(event)=>setTitle(event.target.value)} type="text" placeholder='Title' />
        <input value={price} onChange={(event)=>setPrice(event.target.value)} type="text" placeholder='Price' />
        <input  value={discount} onChange={(event)=>setDiscount(event.target.value)} type="text" placeholder='Discount' />
        <input value={image} onChange={(event)=>setImage(event.target.value)} type="text" placeholder='Image' />
        <button onClick={()=> sendProduct()}>Create</button>
    </div>
  )
}

export default CreateProduct
