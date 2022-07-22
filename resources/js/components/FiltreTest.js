import React from 'react'
import './FiltreTest.css'
import {useState,useEffect}  from 'react';
import HeadFilterCat from './HeadFilterCat'
function FiltreTest(props) {
    // const [click,setClick]= useState(true);
    // const handleClick = ()=>setClick(!click);
    console.log(props);
    const [data,setData] = useState([]);
  //  componentDidMount(){}
//     async function seach(key){
//  console.warn(key);
//  let result = await fetch("http://localhost:8000/api/list/"+key);
//    result = await result.json();
//    setData(result);
//    console.log(result) ;
 
   //  }
     
    return (
        <div><label>search</label><input type='text' onChange={(e)=>props.mesData(e.target.value)}/>  
        </div>
    )
}

export default FiltreTest
