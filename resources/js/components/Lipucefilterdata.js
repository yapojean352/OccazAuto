import React from 'react';
import {useState,useEffect,createContext}  from 'react';
import CardItems from './CardItems';
import "./Cards.css";
import Catalogue from './Catalogue';
import Lipucemodele from './Lipucemodele';
import Lipucefilter from './Lipucefilter';
import './Lipucefilterdata.css'
import CardswithData from './CardswithData';
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
    // componentWillUnmount(){

    // }
    render() { 
      var contenHTML="test";
     // this.props.fc = new this.props.fc("tir")
    
    //  console.log(this.props.fil)
    // console.log(this.state.val)
      // var setVal =(param)=>this.setState({this.state.val
      // this.props.df(this.state.val);
      // // }); 
      const {categor,laoding} = this.state;
   console.log(this.val)
   if(laoding){
    contenHTML = <h4>Laoding ...</h4>
   }else{
    contenHTML=this.state.category.map((cate,i)=>{
    //  dataFilter =createContext({cate})
      return (
          <div>
            <span>key {i}</span>
            <span> mar{cate.marque}</span>
            <Lipucefilter fParent={this.onParent} pada={this.state.val} pafr={this.handleFilterTextChange} marquename={cate.marque}/>
          </div>
        );
      })
   }
        return (<div className="filter-marque"> <span>Marque</span>
            {contenHTML}
        </div>);
}
  }
  
export default Lipucefilterdata;



