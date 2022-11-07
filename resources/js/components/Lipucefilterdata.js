import React from 'react';
import "./Cards.css";
import Lipucefilter from './Lipucefilter';
import './Lipucefilterdata.css'
import TypeCarroFilter from './TypeCarroFilter';
/**
 * donnees de la marque  qui envoi l id de la arque auto au composant charger d afficher 
 * les modele
 * objectif-1: faire remonter le state du composnant enfant LipuceFilter enfant
 * et faire changer son state  au niveau du parent
 * useContext pour passer les state au composant frere CardsWithdata
 */
class Lipucefilterdata extends React.Component {
 
    constructor(props) {
      super(props);
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
      this.handleFilterTextChangeT = this.handleFilterTextChangeT.bind(this);
      this.onParent=this.onParent.bind(this);
      this.closeOpen = this.closeOpen.bind(this);
      this.state = {
        category:[],
        subcategory:[],
        laoding:true,
        close:true,
        val:'',
        };  
    }
    /**fermer ou ouvreles fitres au click */
  closeOpen(){
    this.setState({
      close:!this.state.close,
    })

  }
    //function de rappel pour le composant enfant Lipucefilter
    onParent(e){
      this.props.funT(e);
    }
    handleFilterTextChange(e) {
      this.props.onFilterTextChange(e.target.value);
    }
    handleFilterTextChangeT(e) {
      e.preventDefault();
      this.props.funT(e.target.value);
    }
    
    handleInStockChange(e) {
      this.props.onInStockChange(e.target.checked);
    }
    componentDidMount(){
      let CancelToken;
      
if(typeof CancelToken != typeof undefined){
  CancelToken.cancel("optimze")
}

CancelToken = axios.CancelToken.source()

    axios.get(`http://localhost:8000/api/category/`,{CancelToken:CancelToken.token}).then(response =>{
        this.setState({
          category: response.data.category,
          subcategory: response.data.subcategory,
          laoding:false,
        })
       // console.log(response.data.category);
      }) 
      this.closeOpen();
    }
    render() { 
      var contenHTML="test";
      const {categor,laoding} = this.state;
    // console.log(this.state.subcategory)
   if(laoding){
    contenHTML = <h4>Laoding ...</h4>
   }else{
    contenHTML=this.state.category.map((cate,i)=>{
      return (
          <div>
            <Lipucefilter key={i} dataS ={this.props.products}fParent={this.onParent}
  subCat={this.state.subcategory}   pada={this.state.val} pafr={this.handleFilterTextChange} marquename={cate.marque}/>
          </div>
        );
      })
   }
        return (<div className="filter-marque"><div className='header-mar-container' onClick={this.closeOpen}>
          <strong>Modele ET Marques</strong><i className={this.state.close ? 'fa fa-angle-up':'fa fa-angle-down'}></i> </div>
          <div className={this.state.close ? ' masquer ':'afficher'}>
            {contenHTML}
            </div>
            <TypeCarroFilter  category ={this.state.subcategory} inFilterText={this.props.filterText} cParent={this.onParent}/>
        </div>);
}
  }
export default Lipucefilterdata;



