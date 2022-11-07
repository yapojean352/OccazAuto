import React, { useState, useEffect } from 'react'
import CardItems from './CardItems';
import CardswithDataFunc from './CardswithDataFunc';
import "./funccom.css";
import LipucefilterdataFunc from './LipucefilterdataFunc';
// const api=axios.create({
//   baseUrl:"https://bsoccasionsplus.ca/OccazAuto/api/list/all"
// })

/**Composant parent avec les states */
/** nous avons donc décidé que ComFilterCardsConsFunction possèdera notre état.
 *  Tout d’abord, ajoutez une propriété d’instance
 *  state = {filterText: '', inStockOnly: false} dans le constructor
 *  de ComFilterCardsConsFunction pour refléter l’état initial de votre application.
 *  Ensuite, passez filterText et inStockOnly à ProductTable et filters etat via leurs props.
 *  Enfin, utilisez ces props pour filtrer les lignes
 * dans ProductTable et définir les valeurs des champs du formulaire dans filters etat. */
function ComFilterCardsConsFunction () {
   // Similaire à componentDidMount et componentDidUpdate ::' inStockOnly: false,,',
   var  baseUrl='https://bsoccasionsplus.ca/OccazAuto/api/list/'
   const [dataProduct , setdataProduct] = useState([])
   const [listFilter , setlistFilter] = useState([])
   const [click , setclick] = useState(false)
   const [laoding , setlaoding] = useState(true)
   const [inStockOnly , setinStockOnly] = useState(false)
   const [filterText , setfilterText] = useState()
   const [sum , setsum] = useState('');

     /** Function de rappel pour acceder au state du composant enfant */
     var  handleFilterTextChange=(filterText)=>{
     // setfilterText(filterText)
      searchT(filterText)
  }
  var  handleInStockChange=(inStockOnly)=>{
    setinStockOnly(inStockOnly)
}
var  addList=(e)=>{
  setlistFilter(e)
}
var searchT=(key)=>{
  var tab=[];
  const queryParams = new URLSearchParams(window.location.search);
  var  baseUrl='https://bsoccasionsplus.ca/OccazAuto/api/list/'
    var searchT= true ;
  var val=" ";
  let CancelToken;
  if(val ==" "){
      val="all";
  }
// const seach = props.match.params;
//https://www.youtube.com/watch?v=gPH7sCyXFb4

 if(!searchT){
 const pp = async()=>{
 try{
  const res= await axios.get('https://bsoccasionsplus.ca/OccazAuto/api/list/all');
  console.log(res.data);
  setdataProduct(res.data.autos)
 }catch(er){}

 };
 pp();
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
    //  setState({
    //    auto: response.data.autos,
    //    inStockOnly: true,
    //    sum: response.data.sum,
    //    filterText:key,
    //    laoding:false,
    //    listFilter: tab,
    //  })
   // setfilterText(key);
    setsum(response.data.sum);
    setdataProduct(response.data.autos)

 console.log(response.data)
   },[dataProduct])
  }
   }

   useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
   // setfilterText('AUDI');
   var keycg="all";
    const modele= queryParams.get('modele');
    const carrosserie= queryParams.get('carrosserie');
    if(modele != null ){
      keycg=modele;
     // setfilterText(modele);
   }else if(carrosserie != null){
   // setfilterText(carrosserie);
   keycg=carrosserie;
   }else{
   setfilterText(filterText);
   keycg='all';
   }
     searchT(keycg);
  },[]);

  return ( 
    <div className='catalogue-display ' data-post-type='auto-usager'>
    <div className='catalogue-container'>
        <div className='row'>
         <div className='filters-colunns'>
              <span className="filter-icon"><h3><i className="fa fa-sliders">  {listFilter.length} Filter</i> </h3></span>
            <div className="filter-produit" >
              <div>
              <LipucefilterdataFunc dataf={dataProduct} funT={searchT} 
              handleFilterTextChange={handleFilterTextChange}
              handleInStockChange={handleInStockChange}
              filterText={filterText}
              sum={sum}
              />
             </div>
            </div>
              <div className="filter-fixed-container filter-fixed-container-event-enable  fixed">
              <div className="filters-container">
              </div>
             </div>
         </div>
         <div className='columns listing-column'>
               <div>{sum}Resultats</div>
               {listFilter.map((valF,i)=>{
                if(valF !="" && valF !='all'){
                  return(<span id={i} className="applied-filter">{valF}
                  <a onClick={(e)=>removeKey(valF)} className='close'>X</a></span>)
                }
                if(listFilter.length > 1 ){
                return(<span  className="applied-filter">Delete All {listFilter.length}
                  <a onClick={(e)=>removeKey('all')} className='close'>X</a></span>)
               }
              }
               )}
             <div><h1 className="products">{(filterText=='all' || filterText==undefined ?" Autos usagée et d’occasion à vendre":

           filterText + "  usagée et d’occasion à vendre")} </h1></div>
             <div className="page-title">
            </div>
            <div className="cadre-centre">
        <h5> Example display APIx cpanels=s</h5>
        <CardswithDataFunc products={dataProduct} ker={filterText}/>
            </div>
         </div>
        </div>
    </div>
</div>
   )
   
}
export default ComFilterCardsConsFunction