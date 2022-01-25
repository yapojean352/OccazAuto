import React from 'react';
import CardItems from './CardItems';
import "./Cards.css";
import Catalogue from './Catalogue';
/**
 * recoit l id de la marque en url pour afficher tous ces modeles le concernant
 * recevoir le props id du parent Lipucefilter
 */

class Lipucemodele extends React.Component {
    constructor(props) {
      super(props);
      this.state = [{
        "num_models": 3,
        "modele": "Chrysler-logo-1.jpg",
        "quantite": 104,
        'id':3,
        "avg_price": 32971.666666666664
      },
      {
        "num_models": 8,
        "modele": "c320-logo-1.jpg",
        "quantite": 152,
        'id':2,
        "avg_price": 27965
      },
      {
        "num_models": 18,
        "modele": "Mercedes-Benz-logo-1.jpg",
        "quantite": 270,
        'id':2,
        "avg_price": 80681.94444444444
      },
      {
        "num_models": 6,
        "modele": "Ram-logo-1.jpg",
        "quantite": 307,
        'id':1,
        "avg_price": 31406.666666666668
      }];
    }
    render() {
        return (<>
        {
    this.state.map((modele,i)=>{
       if(modele.id==this.props.marlids){
            return ( <li> {modele.modele}  {this.props.modelids}</li>
                );
       }
   
    })
}
        </>
            
       
);
    }
  }
  

export default Lipucemodele


