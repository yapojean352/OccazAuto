import React, { useState,useEffect } from 'react'

function searchProduct(){
    const [data,setData] = useState([]);
   async function seach (key){
console.warn(key);
let result = await fetch("http://localhost:8000/api/search"+key);
  result = await result.json();
  setData(result);
    }
    return(<div>
        <input type="text" onChange={(e)=>seach('cx')}/>
    </div>);

}
export default searchProduct;
 