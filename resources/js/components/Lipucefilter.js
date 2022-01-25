import React from 'react'
import './FiltreTest.css'
import {useState,useEffect}  from 'react';
import Lipucemodele from './Lipucemodele';
import "./Lipucefilter.css";
/**  gerer le donnees marque et modele
 * composant lipucemodele affichera les donnees
 */
function Lipucefilter(props) {
    const [click,setClick]= useState(true);
    const handleClick = ()=>setClick(!click);
    return (<div>
    <nav>
     <ul className="menu" >
        <li><div className="menubp"  onClick={handleClick}> Marque {props.marquename} <span className={ click ? 'O':'C'}></span></div>
          <ul className={click ? 'afficher':'masquer'}>   
              <Lipucemodele marlids={props.marid} ></Lipucemodele>
          </ul>
        </li>
      </ul>
    </nav>
</div>
    )
}

export default Lipucefilter
