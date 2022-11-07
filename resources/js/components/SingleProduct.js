import React from 'react'
import "./SingleProduct.css";

/* composant items de chaque auto
qui recoit les props (infos) lorsque cet composant est utilisé
*/
function SingleProduct(props) {
    return (<div id="un-item">
           <li className="cards__item container">
               <div className="cards__item__link" >
               <div className="img-container">
             <img src={`public/images/${props.dataImg[0].imageUrl}`}/>
                </div>
                <div className='imgSlide-card'>{props.dataImg.map((imgk)=>{
                  return(<div className='imgSlide'> <img src={`public/images/${imgk.imageUrl}`}/>
                 </div>)
                })}</div>
                 <div className="overlay-container">
                   <p>Information sur le vehicule {props.data[0].details}</p>
                 </div>
                 <div className="singleProduct_info">
                   <div><h4>Modele</h4>{props.data[0].modele}</div>
                   <div><h4>Prix</h4>{props.data[0].prix}</div>
                   <div><h4>Kilometrage</h4>{props.data[0].km}</div>
                   <div><h4>Transmission</h4>{props.data[0].marque}</div>
                   <div><h4>Categorie</h4>{props.data[0].modele}</div>
                   <div><h4>Essence</h4>{props.data[0].prix}</div>
                   <div><h4>Puissance</h4>{props.data[0].details}</div>
                   <div><h4>Couleur</h4>{props.data[0].modele}</div>
                   <div><h4>Traction</h4>{props.data[0].prix}</div>
                 </div>
               </div>
            </li> 
        </div>
    )
}
export default SingleProduct
