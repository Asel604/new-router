import React,{useState} from 'react'
import apiExample from '../axios/apiExample'

function CreateExample() {
    const[title,setTitle] = useState("")
    const[price,setPrice] =useState(0)
    const[discount,setDiscount]=useState(0)
    const[images,setImage] = useState("");

    async function sendExample() {
        const payload={
            title:title,
            price:price,
            discount:discount,
            images:images,
        }
        try {
            const res = await apiExample.post("/example",payload)
            console.log(res);
            
        } catch (error) {
           console.log(error);
            
        }
        
    }
  return (
    <div>Create Example
        <input value={title} onChange={(event)=>setTitle(event.target.value)} type="text" placeholder='Title' />
        <input value={price} onChange={(event)=>setPrice(event.target.value)} type="text" placeholder='Price' />
        <input  value={discount} onChange={(event)=>setDiscount(event.target.value)} type="text" placeholder='Discount' />
        <input value={images} onChange={(event)=>setImage(event.target.value)} type="text" placeholder='Image' />
        <button onClick={()=> sendExample()}>Create</button>
    </div>
  )
}

export default CreateExample