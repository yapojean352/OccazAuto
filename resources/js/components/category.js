import axios from 'axios';
import { Alert, Button } from 'bootstrap';
import React, { useState } from 'react';
import CardItems from './CardItems';
import "./Cards.css";
import Catalogue from './Catalogue';

class CardswithData extends React.Component {
   
   
    
   
    render() {
      var contenHTML="";
      var   imgd="";
      const { autos , laoding,sum} = this.state;
   if(laoding){
    contenHTML = <h4>Laoding ...</h4>
   }else{
    contenHTML=  autos.map((carInfo,i)=>{
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

    // alert(laoding);
        return (<div className="cards">
        <div className="cards__container">
        <div className="page-title-panel">
                 <span> {sum} Resutats trouvée</span>
                 <span>tri par</span>
                 <button onClick={()=>filterResult('tirbute')}>BOUTON</button>
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
