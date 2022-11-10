import React from 'react'
import "./SingleProduct.css";
import react, {useState,useEffect,createContext}  from 'react';
/* composant items de chaque auto
qui recoit les props (infos) lorsque cet composant est utilisé
*/
function SingleProduct(props) {
  var slideIndex=1;
  const [nf, setNf] = useState(0);
  var sliders=(n)=>{
var i;
var x = document.getElementsByClassName("mySlides");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";  
}
x[slideIndex-1].style.display = "block";  
  }
  var slidersPlus=(n)=>{
   // setNf(n);
    sliders(slideIndex += n);
  }
  useEffect(() => {
    // Met à jou le counter via total
    sliders(1);
 });

    return (<div id="un-item">
           <li className="cards__item container">
               <div className="cards__item__link" >
               <div className="img-container">
               {props.dataImg.map((imgk)=>{
                  return(<div className='mySlides'> <img src={`public/images/${imgk.imageUrl}`}/> 
                 </div>)
                })}
                  <div className="btn-container">
                 <button className="w3-button w3-black w3-display-left" onClick={(e)=>slidersPlus(-1)}>&#10094;</button>
                 <button className="w3-button w3-black w3-display-right" onClick={(e)=>slidersPlus(1)}>&#10095;</button>
                 </div>
                </div>
                <div className='imgSlide-card w3-content w3-display-container'>
             
            
                
               
                </div>
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
