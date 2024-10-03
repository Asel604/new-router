import React, { useState,useEffect } from 'react';

const API = "https://www.themealdb.com/api/json/v1/1/search.php?f=a"

function Profile() {
   
    const [prof,setProf] = useState([]);
    async function getProf() {
        try{
      const res = await fetch(API);
      const data = await res.json()
      console.log(data);
      setProf(data.meals)
      
    }catch(error){
        console.log(error);
        
    }
}
useEffect(()=>{
    getProf()
},[])
console.log(prof);

  return (
    <div className='prof'>
      profile
   
      
    <div className='prof-cont'>

        {prof?.map((item)=>(
            <div  key={item.id}>
             <img src={item.strMealThumb} alt="" /> 
             <h3>{item.strArea}</h3> 
             </div>
             
            ))}
           
      </div>

    </div>
  )
}

export default Profile 


