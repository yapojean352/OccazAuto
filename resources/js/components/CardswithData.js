import React from 'react';
import CardItems from './CardItems';
import "./Cards.css";
import Catalogue from './Catalogue';


class CardswithData extends React.Component {
    constructor(props) {
      super(props);
      this.state = [{
        "num_models": 3,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Chrysler-logo-1.jpg",
        "url": "detail-1",
        "max_car_id": 104,
        "id": 1,
        "name": "chrysler",
        "categorie": "voiture",
        "avg_horsepower": 291.3333333333333,
        "avg_price": 32971.666666666664
      },
      {
        "num_models": 8,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Honda-logo-1.jpg",
        "url": "detail-2",
        "max_car_id": 152,
        "id": 2,
        "name": "honda",
        "avg_horsepower": 190.625,
        "avg_price": 27965
      },
      {
        "num_models": 18,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Mercedes-Benz-logo-1.jpg",
        "url": "detail-3",
        "max_car_id": 270,
        "id": 3,
        "name": "mercedes-benz",
        "avg_horsepower": 333.94444444444446,
        "avg_price": 80681.94444444444
      },
      {
        "num_models": 6,
        "img_url": "http://www.carlogos.org/uploads/car-logos/Ram-logo-1.jpg",
        "url": "detail-4",
        "max_car_id": 307,
        "id": 4,
        "name": "ram",
        "avg_horsepower": 299.8333333333333,
        "avg_price": 31406.666666666668
      }];
    }
    render() {
        return (<div className="cards">
        <div className="cards__container">
            <div className='cards__wrapper'>  
                <ul className="cards__items">
                {
                        this.state.map((carInfo,i)=>{
                        // alert(i);
                        return (
                            <div>
                                 <CardItems
                         src="images/img-9.jpg"
                         text={carInfo.name}
                         label={carInfo.avg_price}
                         path={`${carInfo.name}/${carInfo.id}`}
                        
                            />

                            </div>
                          );
                        })
                    }
                </ul>

            </div>

        </div>
    </div>
);
    }
  }
  

export default CardswithData
