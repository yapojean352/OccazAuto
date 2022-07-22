import React, { Component } from 'react'
import CardswithData from './CardswithData';
import "./Catalogue.css";
import Lipucefilterdata from './Lipucefilterdata';
/**Composant parent avec les states */
/** nous avons donc décidé que ComFilterCards possèdera notre état.
 *  Tout d’abord, ajoutez une propriété d’instance
 *  this.state = {filterText: '', inStockOnly: false} dans le constructor
 *  de ComFilterCards pour refléter l’état initial de votre application.
 *  Ensuite, passez filterText et inStockOnly à ProductTable et filters etat via leurs props.
 *  Enfin, utilisez ces props pour filtrer les lignes 
 * dans ProductTable et définir les valeurs des champs du formulaire dans filters etat. */
class ComFilterCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auto:[],
      filterText: 'all',
      inStockOnly: false,
      sum:"",

    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
    this.searchT = this.searchT.bind(this);
  }
   /** Function de rappel pour acceder au state du composant enfant */
   handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }
  componentDidMount(){
    this.searchT('all'); 
    console.log(this.props.filterText)
   }
  searchT(key){
      var searchT= true ;
    var val=" ";
    if(val ==" "){
      //  searchT= false ;
        val="all";
    }
 
    //
  // const seach = this.props.match.params;
  //https://www.youtube.com/watch?v=gPH7sCyXFb4
 
   if(!searchT){
     axios.get(`http://localhost:8000/api/list/all`).then(response =>{
       this.setState({
         auto: response.data.autos,
         laoding:false,
        sum: response.data.sum,
       })
     })
    }else{
 console.log(this.props.filterText)
     axios.get(`http://localhost:8000/api/list/${key}`).then(response =>{
       this.setState({
         auto: response.data.autos,
         inStockOnly: true,
         sum: response.data.sum,
         laoding:false,
       })
   console.log(response.data.autos)
     })
    }
 
     }  
  
  render() {
    console.log(this.state.auto)

    return (
      
      <div className='catalogue-display ' data-post-type='auto-usager'>
      <div className='catalogue-container'>
          <div className='row'>
           <div className='filters-colunns'>
                <span className="filter-icon"><h3><i className="fa fa-sliders">   Filter</i> </h3></span>
              <div className="filter-produit">
                <strong>Model and  marques{this.state.filterText}</strong><span>crochet</span>
                <Lipucefilterdata  filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            funT={this.searchT} 
            onFilterTextChange={this.handleFilterTextChange}
            onInStockChange={this.handleInStockChange}/>
              </div>
             
               <div  className="filter-fixed-container filter-fixed-container-event-enable  fixed">
                <div className="filters-container">
            
                </div>
               </div>

           </div>
           <div className='columns listing-column'>
                 <div>Resultats</div>
               <div><h1 className="products">Autos usagee ---{this.state.filterText}</h1></div> 
               <div className="page-title">
              </div> 
              <div className="cadre-centre"> 
          <h5>valeur modifiable filter </h5>
          <CardswithData products={this.state} ker={this.state.filterText}/>
              </div>
           </div>
          </div>

      </div>
  </div>
  )
  }
}

export default ComFilterCards