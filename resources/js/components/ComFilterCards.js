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
      listFilter:[],
      inStockOnly: false,
      click:false,
      filterText:'all',
      sum:"",
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
    this.searchT = this.searchT.bind(this);
    this.addList = this.addList.bind(this);
    this.removeKey = this.removeKey.bind(this);
    this.removeParam = this.removeParam.bind(this);
  }
 removeParam(key, sourceURL) {
    var rtn = sourceURL.split("?")[0],
        param,
        params_arr = [],
        queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
    if (queryString !== "") {
        params_arr = queryString.split("&");
        for (var i = params_arr.length - 1; i >= 0; i -= 1) {
            param = params_arr[i].split("=")[0];
            if (param === key) {
                params_arr.splice(i, 1);
            }
        }
        if (params_arr.length) rtn = rtn + "?" + params_arr.join("&");
    }
    return rtn;
}
  
  removeKey(keyD){
    const queryParams = new URLSearchParams(window.location.search);
    const modele= queryParams.get('modele');
    const carrosserie= queryParams.get('carrosserie');
//delete doublon
    const newArray =this.state.listFilter.filter((itemD)=>{
     return  itemD !==keyD;
    })
   if(modele == keyD ){
    window.location.href=this.removeParam('modele',window.location.href)
    }
    if(carrosserie == keyD ){
      window.location.href=this.removeParam('carrosserie',window.location.href)
    }
    if(keyD =='all'){
      window.location.href="http://localhost/OccazAuto/vehicule-usager";
      this.setState({
        listFilter:[]
      })
    }
  this.setState({
    listFilter:[...newArray]
  })
  }
  addList(e){
    this.setState({
      listFilter: e
    });
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
   const queryParams = new URLSearchParams(window.location.search);
   const keyChange='all';
   const modele= queryParams.get('modele');
   const carrosserie= queryParams.get('carrosserie');
   if(modele != null ){
   this.keyChange=modele;
  }else if(carrosserie != null){
    this.keyChange=carrosserie;
  }else{
    this.keyChange='all';
  }
    this.searchT(this.keyChange);
   }
  searchT(key){
    var tab=[];
    const queryParams = new URLSearchParams(window.location.search);
    var  baseUrl='http://localhost:8000/api/list/'
      var searchT= true ;
    var val=" ";
    let CancelToken;
    if(val ==" "){
        val="all";
    }
  // const seach = this.props.match.params;
  //https://www.youtube.com/watch?v=gPH7sCyXFb4

   if(!searchT){
     axios.get(`${baseUrl}all`).then(response =>{
       this.setState({
         auto: response.data.autos,
         laoding:false,
        sum: response.data.sum,
       })
     })
    }else{
      if(typeof CancelToken != typeof undefined){
        CancelToken.cancel("optimze")
      }
  CancelToken = axios.CancelToken.source()
  var modele= queryParams.get('modele');
  const params = new URL(location.href).searchParams;
  var carrosserie= queryParams.get('carrosserie');
  baseUrl=baseUrl+key
//build api url
 tab.push(modele==null?key:'');
 if( modele !==null){
  baseUrl=baseUrl+(window.location.search !=='' &&
   window.location.search.includes("?modele") == true?
    `?modele=${modele}`:`?modele=${modele}`);
    tab.push(modele);
 }
 if(carrosserie !== null){
  baseUrl=baseUrl+(window.location.search !=='' &&
  window.location.search.includes("?modele")== true?
   `&carrosserie=${carrosserie}`:`?carrosserie=${carrosserie}`);
   tab.push(carrosserie);
 }
 //delete doublon
 tab=Array.from(new Set(tab));
 console.log(tab)
axios.get(`${baseUrl}`,{CancelToken:CancelToken.token}).then(response =>{
       this.setState({
         auto: response.data.autos,
         inStockOnly: true,
         sum: response.data.sum,
         filterText:key,
         laoding:false,
         listFilter: tab,
       })
   console.log(response.data)
     })
    }
     }
  render() {
   
    return (
      <div className='catalogue-display ' data-post-type='auto-usager'>
      <div className='catalogue-container'>
          <div className='row'>
           <div className='filters-colunns'>
                <span className="filter-icon"><h3><i className="fa fa-sliders">  {this.state.listFilter.length} Filter</i> </h3></span>
              <div className="filter-produit" >
                <div>
                <Lipucefilterdata  filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            funT={this.searchT}
            onFilterTextChange={this.handleFilterTextChange}
            onInStockChange={this.handleInStockChange} products={this.state}/>
               </div>
              </div>
                <div className="filter-fixed-container filter-fixed-container-event-enable  fixed">
                <div className="filters-container">
                </div>
               </div>
           </div>
           <div className='columns listing-column'>
                 <div>Resultats</div>
                 {this.state.listFilter.map((valF,i)=>{
                  if(valF !="" && valF !='all'){
                    return(<span id={i} className="applied-filter">{valF}
                    <a onClick={(e)=>this.removeKey(valF)} className='close'>X</a></span>)
                  }
                  if(this.state.listFilter.length > 1 ){
                  return(<span  className="applied-filter">Delete All {this.state.listFilter.length}
                    <a onClick={(e)=>this.removeKey(valF)} className='close'>X</a></span>)
                 }
                }
                 )}
               <div><h1 className="products">{(this.state.filterText=='all' ?" Autos usagée et d’occasion à vendre":

             this.state.filterText + "  usagée et d’occasion à vendre")} </h1></div>
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