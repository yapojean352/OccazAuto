import React, { useEffect, useState } from 'react'
import CardswithData from './CardswithData';
import "./Catalogue.css";
// import Filters from './Filters';
import Lipucefilter from './Lipucefilter';
import Parent from './Parent';
import Sidenav from './Sidenav';
import ContentPa from './ContentPa';
import Lipucefilterdata from './Lipucefilterdata';

function Catalogue() {
    const [valF,setValf]=useState()
    var  datF=(sjs)=>{
        setValf(sjs);
    }
    useEffect(() => {
        // Met à jour le titre du document via l’API du navigateur
   datF('test');
      });
    //console.log(valF)
    return (
        <div className='catalogue-display ' data-post-type='auto-usager'>
        <div className='catalogue-container'>
            <div className='row'>
             <div className='filters-colunns'>
                  <span className="filter-icon"><h3><i className="fa fa-sliders">   Filter</i> </h3></span>
                <div className="filter-produit">
                  <strong>Model and  marques</strong><span>crochet</span>
        <Lipucefilterdata/>
                  {/* <SidenavModel/>
                    */}
                   {/* <Lipucefilte r/>    */}
                   {/* <Lipucefilterwithdata/>           */}
              
                </div>
               
                 <div  className="filter-fixed-container filter-fixed-container-event-enable  fixed">
                  <div className="filters-container">
                    
                  </div>
                 </div>

             </div>
             <div className='columns listing-column'>
                   <div>Resultats</div>
                 <div><h1 className="products">Autos et Voitures</h1></div> 
                 <div className="page-title">
                </div> 
                <div className="cadre-centre"> 
                {/* <CardswithData ker={valF}/> */}
            <h5>valeur modifiable  ---{valF}</h5>
                {/* <ContentPa/> */}
              
                </div>
             </div>
            </div>

        </div>
    </div>
    )
}
export default Catalogue
