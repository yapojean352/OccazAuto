import React from 'react'
import { Link } from 'react-router-dom'
import "./TypeCarroEnf.css"
function TypeCarroEnf(props) {
    return (
        <div className="child-carro-container">
            <div className="type__carro">
               <Link className="type__carro__link" to={props.value.carrosserie}>
               <h5 className="type__carro__text">{props.value.carrosserie}</h5>
                   <figure className="type__carro__pic-wrap" >
                       <img src="" className="type__carro__img" alt="">
                       </img>
                   </figure>
                   <div className="type__carro__info">
                      <div>123</div> 
                      <div>Q</div>
                   </div>
               </Link>
               <button value = {props.value.carrosserie} onClick={(e)=>props.fC(e.target.value)} >{props.value.carrosserie}</button>
            
            </div>   
        </div>
    )
}

export default TypeCarroEnf
