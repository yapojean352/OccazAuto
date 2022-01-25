import React from 'react'
import { Link } from 'react-router-dom'
import { Boutton } from './Boutton'
import "./CardItem.css"
/* composant items de chaque auto
qui recoit les props (infos) lorsque cet composant est utilisé
*/
function CardItems(props) {
    return (<div id="un-item">
           <li className="cards__item container">
               <div className="cards__item__link" >
                 <div className="overlay-container">
                   <figure className="cards__item__pic-wrap" data-category={props.label}>
                       <img src={props.src} className="cards__item__img" alt={props.text}>
                       </img>
                   </figure>
                      <div className=" overlay overlayFades"> 
                      <div className='texts'>
                          <h3>Title</h3>
                      <Boutton lien={props.path} className='btns' buttonStyle='btn--outline'
                         buttonSize='btn--medium'>Cliquer Ici</Boutton>
                         </div>
                      </div>
                 </div>
                   <div className="cards__item__info">
                       <h5 className="cards__item__text">{props.text}</h5>
                   </div>
               </div>
               {/* <Boutton/> */}
            </li> 
        </div>
    )
}

export default CardItems
