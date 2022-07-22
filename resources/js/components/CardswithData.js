import axios from 'axios';
import { createContext } from 'react';
import { Alert } from 'bootstrap';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import CardItems from './CardItems';
import "./Cards.css";
import Catalogue from './Catalogue';
import FiltreTest from './FiltreTest';
import Lipucemodele from './Lipucemodele';
import Lipucefilterdata from './Lipucefilterdata';
import ChildCp from './ChildCp';

//https://www.youtube.com/watch?v=sCZHGZocytA
class CardswithData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      laoding:false,
      s:'all',
      }
    }
 render() {
      var contenHTML="";
      var   imgd="";
      const { autos , laoding,sum} = this.state;
      console.log(this.props)
 
      
   if(laoding){
    contenHTML = <h4>Laoding ...</h4>
   }else{
    
  //  search('');
    contenHTML=  this.props.products.auto.map((carInfo,i)=>{
      carInfo.pictures.map((v ,s)=>{
        imgd = v.imageUrl;
      }
      );
    var type="/OccazAuto/public";
      return (
          <div>
               <CardItems
       src={`images/${imgd}`}
       keys={carInfo.id}
       text={carInfo.marque}
       label={carInfo.prix}
       path={`${type}/${carInfo.id}`}
          />
          </div>
        );
      })

   }
        return (<div className="cards">          
        <div className="cards__container">
        <div className="page-title-panel">
                 <span>{this.props.products.sum} Resutats trouvée</span>
                 <span>tri parccc</span>
                 <div><label>search</label>
                
        </div>
       
                </div>
            <div className='cards__wrapper'> 
                <ul className="cards__items">
                  {
                    contenHTML
                  }
               
                </ul>
            </div>

        </div>
    </div>
);
    }
  }
  

export default CardswithData
