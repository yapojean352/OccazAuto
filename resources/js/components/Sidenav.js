
import React,{useState,useEffect}  from 'react';
import './Menubar.css' ;
import TypeCarroFilter from './TypeCarroFilter';
import "./Sidenav.css"
function Sidenav(){
    //le state a false
    const [click,setClick]= useState(true);
    //change la valeur true a false au click vis versa
    const handleClick = ()=>setClick(!click);
     return(
         <>
          <header>
               <nav className="navbarl">
                <div className='menubf' onClick={handleClick}>
                    <p className={ click ? 'closes':'open'}>
                        <div>Type Carrosserie crochet </div>
                    </p>
                     <span className={ click ? 'C':'O'}></span>
                 </div> 
                    <div id="masque-af" className={click ? 'masquer':'afficher'} >
                        <div className="container-masque">
                    <TypeCarroFilter/>
                    </div>
                    </div>
               </nav>
           </header>
         </>
       
   )

}
export default Sidenav;