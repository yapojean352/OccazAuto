import React, { useState,useEffect } from 'react';
import "./Cards.css";
import Lipucefilter from './Lipucefilter';
import './Lipucefilterdata.css'
import LipucefilterFunction from './LipucefilterFunction';
import TypeCarroFilterFunction from './TypeCarroFilterFunction';
/**
 * donnees de la marque  qui envoi l id de la arque auto au composant charger d afficher 
 * les modele
 * objectif-1: faire remonter le state du composnant enfant LipuceFilter enfant
 * et faire changer son state  au niveau du parent
 * useContext pour passer les state au composant frere CardsWithdata
 */
function LipucefilterdataFunc (props) {
  const [click,setClick]= useState(false);
  const [close,setClose]= useState(false);
  const handleClick = ()=>setClick(!click);
      const [productF,setproductF]=useState({})
      const [searchF,setsearchF]=useState({})
      const [filterText,setFilterText]=useState('')
  
      //function de rappel pour le composant enfant Lipucefilter
      var  searchFT=(sjs)=>{
        props.funT(sjs);
    }
    var handleFilterTextChange=(e)=>{
       props.handleFilterTextChange(e.target.value)
    }
    var handleFilterTextChangeT=(e)=>{
      props.handleFilterTextChangeT(e.target.value)
    }
    var filterTextF=()=>{
      setFilterText(props.filterText)
    }
   
    // position:absolute;
  function groupArrayOfObjects(list, key) {
    return list.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
 var dataProd= groupArrayOfObjects(props.dataf,'marque')
//  var result= props.dataf.reduce(function (r, a) {
//   r[a.modele] = r[a.modele] || [];
//   r[a.modele].push(a);
//   return r;
// }, Object.create(null));
console.log("++++++++++++++")
console.log(dataProd)
//  Object.keys(datf)
 //JSON.stringify(datf,"","\t");
   useEffect(() => {
    setproductF(dataProd);
   },[]);
   var contenHTML="";
   contenHTML=Object.keys(dataProd).map((cate,i)=>{
    return (
        <ul>
          <LipucefilterFunction key={i} searchFT={searchFT} dataS ={props.dataf} marquename={cate}/>
        </ul>
      );
    })
   
        return (<div className="filter-marque"><div className='header-mar-container'onClick={handleClick} 
        pafr={handleFilterTextChange}>
          <strong>Modele ET Marques function</strong><i className={click ? 'fa fa-angle-up':'fa fa-angle-down'}></i> </div>
          <div className={click ? ' masquer ':'afficher'}> 
            </div>
               {contenHTML}   
               <TypeCarroFilterFunction  dataT ={props.dataf} inFilterText={props.filterText}
               cParent={searchFT}/>
        </div>);

  }
export default LipucefilterdataFunc;



