import React, { useState } from 'react';
import CardItems from './CardItems';
import "./Cards.css";
/**
 * component of all product 
 * component child CardItems
 */
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
   if(laoding){
    contenHTML = <h4>Laoding ...</h4>
   }else{
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
                 <span>trier ASC-DESC</span>
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
export default CardswithData;
