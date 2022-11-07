import React from 'react'
import { Link } from 'react-router-dom'
import "./TypeCarroEnf.css"
import {useState}  from 'react';
import {useHistory} from 'react-router-dom';
function TypeCarroEnf(props) {
    const history = useHistory();
   // console.log(window.location.href)
     var paramU='non';
    const [dataF,setDataF]=useState();
    var answer_arrayT = window.location.search.split('&');
    var  dataFF=(sjs)=>{
        paramU=window.location.search;
        setDataF(sjs);
        props.fC(sjs);
        console.log(paramU)
        
       // window.location.assign()
       //const answer_arrayT = window.location.search.split('&');
      // console.log(answer_arrayT.length) //window.location.search==''
      // window.location.assign( (true ? window.location.href+`&carrosserie=${sjs} ` : window.location.href+`?carrosserie=${sjs} `))
      window.location.assign((window.location.search =='' ? window.location.href+`?carrosserie=${sjs} ` : window.location.href+`&carrosserie=${sjs} `))
     
   
    }
    return (
        <div className="child-carro-container">
            <div className="type__carro" style={{backgroundImage:`url(public/images/${props.value.carrosserie}.png)`,backgroundRepeat:"no-repeat"
       ,backgroundSize:"contain",backgroundPosition:"center"}}>
               <div className="type__carro__link"  onClick={(e)=>dataFF(props.value.carrosserie)}>
               <h5 className="type__carro__text">{props.value.carrosserie}</h5>
                   <figure className="type__carro__pic-wrap" >
                       <img src="" className="type__carro__img" alt="">
                       </img>
                   </figure>
                   <div className="type__carro__info">
                      <div>{props.value.carrosserie}</div> 
                      
                   </div>
                    <div>{props.value.total}</div>
               </div>
               
               {/* <button   value = {props.value.carrosserie} onClick={(e)=>dataFF(e.target.value)} >{props.value.carrosserie}<input type="checkbox" id="vehicle2" 
               name={props.value.carrosserie} value={props.value.carrosserie}></input></button> */}
            
            </div>   
        </div>
    )
}

export default TypeCarroEnf
