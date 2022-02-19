import axios from 'axios';
import React from 'react';
import CardItems from './CardItems';
import "./Cards.css";
import Catalogue from './Catalogue';

class CardswithData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      autos:[],
      laoding:true,
      }
    }
     componentDidMount(){
    axios.get('http://localhost:8000/api/list').then(response =>{
      this.setState({
        autos: response.data.autos,
        laoding:false,
      })
      console.log(response.data)
    })
   
      // if(rest.data.status === 200){
      // this.setState({
      //   autos:rest.data.autos,
      // });
      // }
     // this.state=rest.data.autos;
    //  console.log(this.state);
    }
   
    render() {
      var contenHTML="";
      const { autos , laoding} = this.state;
   if(laoding){
    contenHTML = <h4>Laoding ...</h4>
   }else{
    contenHTML=  autos.map((carInfo,i)=>{
      // alert(window.location.pathname);
    var type="/OccazAuto/public";
      return (
          <div>
               <CardItems
       src="images/img-9.jpg"
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
