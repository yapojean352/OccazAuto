import React from 'react'
import { Link } from 'react-router-dom'
import { Boutton } from './Boutton'
import "./SingleProduct.css";
//import {useParams} from 'react-router-dom'
/* composant items de chaque auto
qui recoit les props (infos) lorsque cet composant est utilisé
*/
function SingleProduct(props) {
   // let {id} = useParams();
 // const ur =new URLSearchParams();
  console.log(props.dataImg);
    return (<div id="un-item">
           <li className="cards__item container">
               <div className="cards__item__link" >
               <div className="img-container">
             <img src={`images/${props.dataImg.imageUrl}`}/>
                </div>
                 <div className="overlay-container">
            <p>Information sur le vehicule {props.dataImg.imageUrl}</p>
                 </div>
                 <div className="singleProduct_info">
                 <div><span>IMG</span>{props.dataImg.imageUrl}</div>
                   <div><span>Modele</span>{props.data[0].modele}</div>
                   <div><span>Prix</span>{props.data[0].prix}</div>
                   <div><span>Kilometrage</span>{props.data[0].km}</div>
                   <div><span>Transmission</span>{props.data[0].marque}</div>
                   <div><span>Categorie</span>{props.data[0].modele}</div>
                   <div><span>Essence</span>{props.data[0].prix}</div>
                   <div><span>Puissance</span>{props.data[0].marque}</div>
                   <div><span>Couleur</span>{props.data[0].modele}</div>
                   <div><span>Traction</span>{props.data[0].prix}</div>
                   
                 </div>
               </div>
               {/* <Boutton/> */}
            </li> 
        </div>
    )
}

export default SingleProduct
