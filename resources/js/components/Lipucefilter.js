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
   const [datpa,setdatpa] = useState('');
 console.log( props.fParent)
    // const filterResult =()=>{
    //     const result = props.filter((curData)=>{
    //       return curData ;
    //     });
    //     setData(result);
    // }

    useEffect(() => {
      // Met à jour le titre du document via l’API du navigateur
       //  props.fParent('cx')
    });
 
    const handleClick = ()=>setClick(!click);
    //fonction de rappel dans le parent ,pour recuperer le ste de l enfant
   var  dataf=(sjs)=>{
        setData(sjs);
    //    props.pafr(sjs);
    props.fParent(sjs)
    }
console.log(datas)
   

    return (<div>
    <nav>
     <ul className="menu" >
        <li><div className="menubp"  onClick={handleClick}>{props.marquename} <span className={ click ? 'O':'C'}></span><input id="make-1875" 
            name="makeOpen[]" type="checkbox" class="tv-nested" value="1875"/></div>
          <ul className={click ? 'afficher':'masquer'}>   
             <Lipucemodele  fd={datas} fr={dataf} marlids={props.marid} mar={props.marquename} ></Lipucemodele>
          </ul>
        </li>
      </ul>
    </nav>
</div>
    )
}

export default Lipucefilter
