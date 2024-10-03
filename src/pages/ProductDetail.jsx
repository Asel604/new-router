import React,{useState}from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/product'



function ProductDetail() {
    const{id} = useParams();
    const findProduct = products.find((item) => item.id == id)
    const [title, serTitle] = useState("Ariet")
    const[category,setCategory] = useState("Fati")
    const[photo,setPhoto] = useState(findProduct.image)
    function changeTitle(){
      if(title == "Ariet"){
        serTitle("Kutman")
      }else{
        serTitle("Ariet")
      }
    }
  return (
    <div className='detail'>
      {id}
      <img className='img' src={photo} alt="" />
  
     <h5 className='title'>{findProduct.title}</h5>
     <h6 className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatibus provident laboriosam beatae odio aliquid, libero veniam maiores molestias suscipit nisi earum quod impedit praesentium obcaecati repellat quo. Blanditiis, praesentium.</h6>
     <p className='p'> Rating-{findProduct.rating}</p>
     <button className='btn'>Add to cart</button>
     <div className='cena'>{findProduct.discount ?( <>
      <p className='cena1' style={{textDecoration: 'line-through', color: '#cc2e2e'}}>{findProduct.price}$</p>
      <p className='cena2' style={{color: 'rgb(13, 125, 32)'}}>{findProduct.discountedPrice}$</p>
      </> ):( <p className='p1' style={{color: 'rgb(13, 125, 32)'}}>
       {findProduct.price}$
      </p>)}
      </div>
      
     
  <div>{
        findProduct.images.map((item) =>(
            <img onClick={()=>setPhoto(item)} className='imgs' src={item} alt="" />
        ))
     }
    </div>   
     {title}
     <button onClick={()=>changeTitle("")}>Send</button>
    { category}
    <button onClick={() =>setCategory("Amazon")}>Send</button>
    </div>
  )
}

export default ProductDetail
