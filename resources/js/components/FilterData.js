import React, { useState } from 'react'

function FilterData(){
    const filcategory =()=>{
        const  [data,setData]=useState([category]);
        let responseF=(catItem)=>{
         const result = category.filter((curentData)=>{
            return curentData.filcategory==responseF;
         });
       //  setData(result);
         console.log(data);
        };
    }
    return (<>
    <div>
        <button onClick={(e)=>responseF('cx')}>click</button>
    </div>
    </>)
} 
export default FilterData