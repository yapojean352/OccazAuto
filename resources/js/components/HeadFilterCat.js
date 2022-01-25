//import React from 'react'
import React,{useState,useEffect}  from 'react';
import  "./HeadFilterCat.css"

function HeadFilterCat(onClick) {
    const [click,setClick]= useState(true);
    const handleClick = ()=>setClick(!click);
    console.log(click)
    return (
       
            <div className='menubf' onClick={handleClick}>
                    <p className={ click ? 'closes':'open'}>
                    <div>Type Carrosserie crochet </div>
                    </p>
                    {console.log(click)}
                    <span className={ click ? 'C':'O'}></span>
             </div> 
      
    )
}

export default HeadFilterCat
