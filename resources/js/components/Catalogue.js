import React from 'react'
import CardswithData from './CardswithData';
import "./Catalogue.css";
// import Filters from './Filters';
import Lipucefilter from './Lipucefilter';
import Parent from './Parent';
import Sidenav from './Sidenav';
import SidenavModel from './SidenavModel';
import Lipucefilterwithdata from './Lipucefilterwithdata';
function Catalogue() {
    return (
        <div className='catalogue-display ' data-post-type='auto-usager'>
        <div className='catalogue-container'>
            <div className='row'>
             <div className='filters-colunns'>
                  <span className="filter-icon"><h3><i className="fa fa-sliders">   Filtre</i> </h3></span>
                <div className="filter-produit">
                  <strong>Modedel and  marques</strong><span>crochet</span>
                  {/* <Filters/> */}
                  {/* <FiltreTest/> */}
                 
                  <SidenavModel/>
                   <Sidenav/>   
                   {/* <Lipucefilter/>    */}
                   {/* <Lipucefilterwithdata/>           */}
                </div>

                 <div  className="filter-fixed-container filter-fixed-container-event-enable  fixed">
                  <div className="filters-container">
                    
                  </div>
                 </div>

             </div>
             <div className='columns listing-column'>
                   <div>Resultats</div>
                 <div><h1 className="products">Autos et Voitures usagées et d’occasion </h1></div> 
                 <div className="page-title">
                <div className="page-title-panel">
                 <span>23 Resutats trouve</span>
                 <span>tri par</span>
                </div>
                </div> 
                
                <div className="cadre-centre">
                <CardswithData/>
                
                </div>
              
             </div>
            </div>

        </div>
    </div>
    )
}

export default Catalogue
