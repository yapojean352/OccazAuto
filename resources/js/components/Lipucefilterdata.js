import React from 'react';
import {useState,useEffect}  from 'react';
import CardItems from './CardItems';
import "./Cards.css";
import Catalogue from './Catalogue';
import Lipucemodele from './Lipucemodele';
import Lipucefilter from './Lipucefilter';
import './Lipucefilterdata.css'
/**
 * donnees de la marque  qui envoi l id de la arque auto au composant charger d afficher 
 * les modele
 */

class Lipucefilterdata extends React.Component {
    constructor(props) {
      super(props);
      this.state = [{
        "id-marque": 1,
        "f": 3,
        "name": "Chrysler",
        "quantite": 104,
        "avg_price": 32971.666666666664
      },
      {
        "id-marque": 3,
        "f": 8,
        "name": "Honda",
        "quantite": 152,
        "avg_price": 27965
      },
      {
        "id-marque": 2,
        "f": 18,
        "name": "Mercedes",
        "quantite": 270,
        "avg_price": 80681.94444444444
      },
      {
        "id-marque": 3,
        "f": 6,
        "name": "Ram",
        "quantite": 307,
        "avg_price": 31406.666666666668
      }];
    }
    render() {
    //    const [click,setClick]= useState(true);
    //     const handleClick = ()=>setClick(!click);
        return (<div className="filter-marque">
        {
    this.state.map((marques,i)=>{
        
   //     if(modele.f==props.numeroModel){
            return (  <>
            <Lipucefilter modelid={marques.f} marquename={marques.name} marid={marques['id-marque']}></Lipucefilter>
            </>
                );
     //   }
   
    })
}
        </div>
            
       
);
    }
  }
  

export default Lipucefilterdata


