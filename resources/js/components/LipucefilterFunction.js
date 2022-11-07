import React from 'react'
import './FiltreTest.css'
import react, {useState,useEffect,createContext}  from 'react';
import Lipucemodele from './Lipucemodele';
import "./Lipucefilter.css";
import FunListModele from './FunListModele';
import {useHistory} from 'react-router-dom'
/**  gerer le donnees marque et modele
 * composant lipucemodele affichera les donnees
 */
function LipucefilterFunction(props) {
  const history = useHistory();
    const [click,setClick]= useState(false);
    const [clickP,setClickP]= useState(false);
   const [datas,setData]=useState();
   const [counter, setCounter] = useState(0);
    const handleClick = ()=>setClick(!click);
    //fonction de rappel dans le parent ,pour recuperer le ste de l enfant
    var answer_array = window.location.search.split('&');
   var  dataf=(sjs)=>{
        setData(sjs);
        setClickP(!clickP);
        props.searchFT(sjs)
    console.log(window.location.search);
history.push((true ? window.location.pathname+`?modele=${sjs} ` : window.location.pathname+`&modele=${sjs} `))
    }
    var total=0;
  useEffect(() => {
     // Met à jour le counter via total
    setCounter(total);
  });
   /**filter subcategory
     * @return array filter
     */
 var result= props.dataS.reduce(function (r, a) {
    r[a.modele] = r[a.modele] || [];
    r[a.modele].push(a);
    return r;
}, Object.create(null));
let tab=[];
console.log(Object.keys(result))

let content = Object.keys(result).map((val,index)=>{
 if(val && result[val][0].marque=== props.marquename){
  total=total+result[val].length;
    return(<ul className={ click ? 'ou':'fer'}>
      <li  key={index} className='subCat'>
          <div className='menubp' onClick={(e)=>dataf(val)} > <span>{val} 
           </span>{result[val].length}</div>
      </li>
    </ul>)
   }
 
})
return(<div>
    <nav>
     <ul className="menu" >
        <li className={counter== 0 ? 'fer':'ou'}>
          <div className="menubp"  onClick={handleClick}>
      <div className='oCbrand' > <span ><img className={props.marquename}
           src={`public/images/${props.marquename}-ICON.jpg`}/></span>
          {props.marquename} 
        <span className={ click ? 'O':'C'}></span><input id="make-1875" 
            name="makeOpen[]" type="checkbox" class="tv-nested" value="1875"/>
            </div> 
            <span className='count'>{ click ? '':counter}</span></div>
          <ul >
           <li  className={ click ? 'ou':'fer'}> 
            <button>Tout choisir------------------ 
            </button>({counter})
            </li>        
          {content}
          </ul>
        </li>
      </ul>
    </nav>
</div>)

}
export default LipucefilterFunction
