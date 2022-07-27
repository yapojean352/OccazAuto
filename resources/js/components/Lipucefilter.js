import React from 'react'
import './FiltreTest.css'
import react, {useState,useEffect,createContext}  from 'react';
import Lipucemodele from './Lipucemodele';
import "./Lipucefilter.css";
/**  gerer le donnees marque et modele
 * composant lipucemodele affichera les donnees
 */
function Lipucefilter(props) {
    const [click,setClick]= useState(true);
   const [datas,setData]=useState();
    const handleClick = ()=>setClick(!click);
    //fonction de rappel dans le parent ,pour recuperer le ste de l enfant
   var  dataf=(sjs)=>{
        setData(sjs);
    props.fParent(sjs)
    }
    return (<div>
    <nav>
     <ul className="menu" >
        <li><div className="menubp"  onClick={handleClick}>11{props.marquename} <span className={ click ? 'O':'C'}></span><input id="make-1875" 
            name="makeOpen[]" type="checkbox" class="tv-nested" value="1875"/></div>
          <ul className={click ? 'afficher':'masquer'}>  22 
             <Lipucemodele  fd={datas} fr={dataf} marlids={props.marid} mar={props.marquename} ></Lipucemodele>
          </ul>
        </li>
      </ul>
    </nav>
</div>
    )
}

export default Lipucefilter
