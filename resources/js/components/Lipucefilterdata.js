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
      this.state = {
        category:[],
        subcategory:[],
        laoding:true,
        val:'',
        };  
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
    axios.get(`http://localhost:8000/api/category/`).then(response =>{
        this.setState({
          category: response.data.category,
          laoding:false,
        })
        console.log(response.data);
      }) 
    }
    render() { 
      var contenHTML="test";
      const {categor,laoding} = this.state;
   if(laoding){
    contenHTML = <h4>Laoding ...</h4>
   }else{
    contenHTML=this.state.category.map((cate,i)=>{
      return (
          <div>
            <Lipucefilter key={i} fParent={this.onParent} pada={this.state.val} pafr={this.handleFilterTextChange} marquename={cate.marque}/>
          </div>
        );
      })
   }
        return (<div className="filter-marque">  <strong>Modele ET Marques</strong>
            {contenHTML}
            <TypeCarroFilter cParent={this.onParent}/>
        </div>);
}
  }
export default Lipucefilterdata;



