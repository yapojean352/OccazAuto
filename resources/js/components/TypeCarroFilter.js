import React, { useState, useEffect } from 'react';
import TypeCarroEnf from './TypeCarroEnf'
import "./TypeCarroFilter.css"
import {useHistory} from 'react-router-dom'
function TypeCarroFilter(props) {
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
    useEffect(() => {
        axios.get(`http://localhost:8000/api/carrosserie/${props.inFilterText}`).then(response =>{
            setItems(response.data.typeCarrosserie);
             setSum(response.data.sum);
          })
      //    console.log(props.inFilterText)
    },[props.inFilterText]);
 //console.log(items)
    return (
        <div className="typeCarro-container">
            
         {items.map((item,index) => (
           <TypeCarroEnf key={index} value={item}  sum={sum}fC={dataC}/>
        ))}
        </div>
    )
}

export default TypeCarroFilter
