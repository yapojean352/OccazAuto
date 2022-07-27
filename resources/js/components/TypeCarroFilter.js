import React, { useState, useEffect } from 'react';
import TypeCarroEnf from './TypeCarroEnf'
import "./TypeCarroFilter.css"
function TypeCarroFilter(props) {
    const [items, setItems] = useState([]);
   const [datac,setDatac]=useState();
   var  dataC=(sjs)=>{
    setDatac(sjs);
//    props.pafr(sjs);
props.cParent(sjs)
}
    useEffect(() => {
        axios.get(`http://localhost:8000/api/carrosserie/`).then(response =>{
            setItems(response.data.typeCarrosserie);
          })
    },[]);
    return (
        <div className="typeCarro-container">
         {items.map((item,index) => (
           <TypeCarroEnf key={index} value={item} fC={dataC}/>
        ))}
        </div>
    )
}

export default TypeCarroFilter
