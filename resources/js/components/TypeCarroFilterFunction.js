import React, { useState, useEffect } from 'react';
import TypeCarroEnfFunction from './TypeCarroEnfFunction'
import "./TypeCarroFilter.css"
import {useHistory} from 'react-router-dom'
function TypeCarroFilterFunction(props) {
    const [items, setItems] = useState([]);
    const [sum, setSum] = useState([]);
   const [datac,setDatac]=useState();
   var  dataC=(sjs)=>{
    setDatac(sjs);
//    props.pafr(sjs);
// history.push(window.location.pathname+'?carrosserie='+sjs)
props.cParent(sjs)
}
//console.log(props.filChange)
var sumT =0
    useEffect(() => {
        setItems(props.dataT)
      //    console.log(props.inFilterText)
    },[props.inFilterText]);
    console.log("props.dataT")
 console.log(props.dataT)
 function groupArrayOfObjects(list, key) {
    return list.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
 var dataCarro= groupArrayOfObjects(props.dataT,'carrosserie')
    return (
        <div className="typeCarro-container">
         {Object.keys(dataCarro).map((item,index) => (
        
           <TypeCarroEnfFunction key={index} value={item}  
           sum={sumT+dataCarro[item].length} fC={dataC}/>
        ))}
        </div>
    )
}

export default TypeCarroFilterFunction
