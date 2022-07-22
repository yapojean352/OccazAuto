import axios from 'axios';
import { Alert } from 'bootstrap';
import { initial } from 'lodash';
import React, { useState } from 'react';
import CardItems from './CardItems';
import "./Cards.css";
import Catalogue from './Catalogue';
import FiltreTest from './FiltreTest';

function CardswithData(props){
 
  const filcategory =()=>{
   // const  [dataF,setDataF]=useState();
 let datsr= axios.get(`http://localhost:8000/api/list/${dataF}`).then(response =>{
      // setState({
      //   autos: response.data.autos,
      //   sum: response.data.sum,
      //   laoding:false,
      // })
      // const [staData,setStaData]= useState(response.data.autos );
      // setDataF(dataF);
      console.log(response.data);
    })
    const  [data,setData]=useState([datsr]);
    let responseF=(catItem)=>{
     const result = datsr.filter((curentData)=>{
        return curentData.filcategory==responseF;
     });
     setData(result);
     console.log(data);
    };
}

  //console.log(dataF)
  return (<>
    <div>
      <h1>paren : {dataF}</h1>
        <FiltreTest mesData={filcategory('cx')}/>
    </div>
    </>)
  }
  

export default CardswithData
