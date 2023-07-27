import React, { useEffect, useState } from 'react'
import {Chart as ChartJS,ArcElement,Tooltip,Legend} from 'chart.js'
import {Pie} from 'react-chartjs-2'
ChartJS.register(
    ArcElement,Tooltip,Legend
);
function Piec() {
    const [data,setData] =useState("")
    const [category,setCategory] =useState("")
    
    useEffect(()=>{
   
        const api= async ()=>
        {
       
        
             try
             {
            let res= await fetch('https://fakestoreapi.com/products')
               let data= await res.json()
               console.log('data',Object.values(data))
             setData(Object.values(data))
         
       
             }
             catch(err)
             {
               console.log('error',err)
             }
             try{
               fetch('https://fakestoreapi.com/products/categories')
                   .then(res=>res.json())
                   .then(json=>  setCategory(Object.values(json)))
             }
             catch(err)
             {
               console.log('error',err)
             }
           }
          api();
          
       },[])
       let count=[];
       category && category.map((cat)=>
       { let c=0;
        data.filter((v)=>{
            
            if(v.category===cat)
            c++;
        })
        count.push(c);
       })
       let piData={
        labels: ['electronics', 'jewelery', "men's clothing", "women's clothing"],
        datasets:[
        {
            data:count,
            backgroundColor:['aqua','teal','bloodorange','purple']
       }
    ]
       };
  return (
    <div style={{padding:'20px' ,width:'600px',height:'600px'}}>
        <Pie
        data={piData}
    ></Pie>
    </div>
  )
}

export default Piec