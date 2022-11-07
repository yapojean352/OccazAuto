
import React,{useState,useEffect}  from 'react';
import './Menubar.css' ;
import "./Sidenav.css"
import Lipucefilterdata from './Lipucefilterdata';
function SidenavModel(){
    //le state a false
    const [click,setClick]= useState(true);
    //change la valeur true a false au click vis versa
    const handleClickT = ()=>setClick(!click);
     return(
         <>
          <header>
               <nav className="navbarl">
                <div className='menubf' onClick={handleClickT}>
                    <p className={ click ? 'closes':'open'}>
                        <div>Modele et marques SidenavModel </div>
                    </p>
                     <span className={ click ? 'O':'C'}></span>
                 </div> 
                    <div id="masque-af" className={click ? 'afficher':'masquer'} >
                        <div className="container-masque">
                    <Lipucefilterdata/>  
                    </div>
                    </div>
                  
               </nav>
           </header>
         </>
       
   )

}
export default SidenavModel;