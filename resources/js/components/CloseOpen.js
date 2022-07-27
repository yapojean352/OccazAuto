import React from 'react'
import './FiltreTest.css'
import react, {useState,useEffect,createContext}  from 'react';
import "./Lipucefilter.css";/**  gerer le donnees marque et modele
 * composant lipucemodele affichera les donnees
 */
function CloseOpen(props) {
    const [click,setClick]= useState(true);
    useEffect(() => {
      // Met à jour le titre du document via l’API du navigateur
       //  props.fParent('cx')
    });
 
    const handleClick = ()=>setClick(!click);
   
    return (<div>
    <nav>
     <ul className="menu"  >
        <li className={click ? 'afficher':'masquer'}><div className="menubp"  onClick={handleClick}><span className={ click ? 'O':'C'}></span></div>
       CloseOpen
        </li>
      </ul>
    </nav>
</div>
    )
}

export default CloseOpen
