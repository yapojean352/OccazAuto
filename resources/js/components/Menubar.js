
import React,{useState,useEffect}  from 'react';
import  { Boutton } from './Boutton';
import './Menubar.css' ;
import { Link } from "react-router-dom";
// // get our fontawesome imports
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Menubar(){
    //le state a false
    const [click,setClick]= useState(false);
   const [button,setButton]=useState(true);
   //media responsise pour afficher 
    const showButton=()=>{
        if(window.innerWidth < 960){
        setButton(false);
        }else{
            setButton(true);  
        }

    }
    //change la valeur true a false au click vis versa
    const handleClick = ()=>setClick(!click);
    const closeMobileMenu = ()=>setClick(false);
    //annuler le changement e valeur
    useEffect(()=>{
       showButton()
    },[]);
     window.addEventListener('resize',showButton);
     return(
         <>
          <header className="bar-fixed">
               <nav className="navbar">
                    <div className="navbar-container">
                    <Link to='/Occaz-Auto/' className="navbar-logo" onClick={closeMobileMenu}>OccazAuto</Link>
                    </div>
                    <div className='menu-icon' onClick={handleClick}>
                    <div className={ click ? 'close':'open'}>{ click ? <i className="fa fa-times"></i>:<i className="fa fa-bars"></i>}
                    </div>
                    </div> 
                   <ul className={ click ? 'nav-menu active' : 'nav-menu '}>
                       <li className='nav-item'>
                       <Link className=' ' >
                         RECHERCHER
                           </Link>
                       </li>
                       <li className='nav-item'> 
                          <Link to='/Occaz-Auto/vehicule-usager' className='nav-links' onClick={closeMobileMenu}>
                        Trouver un véhicule
                           </Link>
                       </li>
                       <li className='nav-item'> 
                          <Link to='/Occaz-Auto/A-vendre/' className='nav-links' onClick={closeMobileMenu}>
                         Vendre un véhicule
                           </Link>
                       </li>
                       <li className='nav-item'> 
                          <Link to='/Occaz-Auto/Financement' className='nav-links' onClick={closeMobileMenu}>
                         Financements
                           </Link>
                       </li>
                       <li className='nav-item'> 
                          <Link to='/Occaz-Auto/plus' className='nav-links' onClick={closeMobileMenu}>
                         Plus
                           </Link>
                       </li>
                       <li className='nav-item'> 
                          <Link to='/signUp' className='nav-links-mobile ' onClick={closeMobileMenu}>
                          1 438874 0323
                           </Link>
                       </li>
                   </ul>
                   {button && <Boutton buttonStyle='btn--outline '>1 438874 0323</Boutton>}
               </nav>
           </header>
         </>
       
   )

}
export default Menubar;