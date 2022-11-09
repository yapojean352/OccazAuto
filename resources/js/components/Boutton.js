import React from 'react';
import './Button.css' ;
import { Link } from "react-router-dom";
const STYLES=['btn--primary','btn--outline','btns--bg']
const SIZES =['btn--medium','btn--large']
//gerer la taille des buttons
//les valeur a recevoir du parent passer en parametre ou defaut(children)
export const Boutton =({
    children,
    type ,
    onClick,
    buttonStyle,
    buttonSize,
    lien
})=>{
    const checkButtonStyle =STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize =SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return(
   <Link to={lien} className='btn-mobile'>
       <button className={ `btn ${checkButtonStyle} ${checkButtonSize}` }
        onClick={onClick}
        type={type}> 
         {children}
       </button>
   </Link>
    )

};