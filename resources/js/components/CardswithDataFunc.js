import React, { useState } from 'react';
import CardItems from './CardItems';
import "./Cards.css";
import SelectTri from './SelectTri';
import Spinner from './Spinner/Spinner';
/**
 * component of all product 
 * component child CardItems
 */
//https://www.youtube.com/watch?v=sCZHGZocytA
class CardswithDataFunc extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      laodings:false,
      s:'all',
      sortAsc:'ASC'
      }
      this.handleTriTextChange = this.handleTriTextChange.bind(this);
    }
    /** Function de rappel pour acceder au state du composant enfant */
   handleTriTextChange(sortText) {
    this.setState({
      sortAsc: sortText
    });
  //  console.log(this.state.sortAsc)
  }
  
 render() {
      var contenHTML="";
      var   imgd="";
     // const { autos , laoding,sum} = this.state;
      // let { modele } = useParams();
    //  alert(this.props.products.laoding);
   if(this.props.products.laoding){
    contenHTML =  <Spinner>laoding....</Spinner>

   }else{
    // const myData = [].concat(this.props.products.auto.sort((a, b) => a.marque > b.marque ? 1 : -1))
    // console.log(myData)
    // const myData = [].concat(this.state.data)
    // .sort((a, b) => a.itemM > b.itemM ? 1 : -1)
    contenHTML=  this.props.products.sort((a,b)=>{
      if(this.state.sortAsc === "ASC"){
        return parseInt(a.prix) > parseInt(b.prix) ? 1 : -1 
      }else if(this.state.sortAsc === "DESC"){
        return  parseInt(a.prix) > parseInt(b.prix) ? -1 : 1
      }
    }).map((carInfo,i)=>{
      carInfo.pictures.map((v ,s)=>{
        imgd = v.imageUrl;
      }
      );
    
    var type="/OccazAuto";
 
      return (
          <div>
               <CardItems
       src={`public/images/${imgd}`}
       keys={carInfo.id}
       text={`${carInfo.carrosserie}`}
       label={`${carInfo.prix} $`}
       path={`${type}/${carInfo.id}-${carInfo.marque}-${carInfo.modele}`}
       marque={carInfo.marque}
       modele={carInfo.modele}
       km={`${carInfo.km} km`}
          />
          </div>
        );
      })
   }
        return (<div className="cards">          
        <div className="cards__container">
          <div className="page-title-panel">
                 <span>{this.props.products.sum} Resutats trouvée</span>
                 Tri par
                 <div>
                  {<SelectTri handleTriTextChange={this.handleTriTextChange}/>}
                 </div>
                 <div className='seach_container'> <input type="text" placeholder="Search.." name="search"/>
      <button type="submit"><i class="fa fa-search"></i></button> 
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
export default CardswithDataFunc;
