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
function Lipucefilter(props) {
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
    props.fParent(sjs);
    console.log(window.location.search);
history.push((true ? window.location.pathname+`?modele=${sjs} ` : window.location.pathname+`&modele=${sjs} `))
    }
    var old_data;
    var old_datas=[];
  
    var total=0;
  useEffect(() => {
     // Met à jour le counter via total
    setCounter(total);
  });
   /**filter subcategory
     * @return array filter
     */
 var result= props.dataS.auto.reduce(function (r, a) {
    r[a.modele] = r[a.modele] || [];
    r[a.modele].push(a);
    return r;
}, Object.create(null));

if(Object.keys(result).length == 6 ){
  window.localStorage.setItem("old-data", JSON.stringify(result))
localStorage.setItem("ARRAY", old_data);
}
old_data = window.localStorage.getItem("old-data")
old_datas.push(JSON.parse(old_data));
     var dataD=(clickP == false ? result:result); 
    localStorage.removeItem("ARRAY");
    return (<div>
    <nav>
     <ul className="menu" >
        <li className={counter== 0 ? 'fer':'ou'}><div className="menubp" 
         onClick={handleClick}>
      <div className='oCbrand'> <span ><img className="icon_img"
           src={`public/images/${props.marquename}-icon.jpg`}/></span>
          {props.marquename} 
        <span className={ click ? 'O':'C'}></span><input id="make-1875" 
            name="makeOpen[]" type="checkbox" class="tv-nested" value="1875"/>
            </div> 
            <span className='count'>{ click ? '':counter}</span></div>
          <ul className={click ? 'afficher':'masquer'}>
          <li   className='subCat'> <div className="menubp"> <button 
                  >Tout choisir------------------ </button><span>({counter})</span></div></li>
                {Object.keys(dataD).map((item,index) => {
                  if(dataD[item][0].marque===props.marquename  ){ 
                 total=total+dataD[item].length
                   return (
                      <li  key={index} className='subCat'>
                        <div className='menubp' onClick={(e)=>dataf(item)} 
                     > <span>{item} </span>{dataD[item].length}</div></li>
                     )
                   } 
                })}
          </ul>
        </li>
      </ul>
    </nav>
</div>
    )
}
export default Lipucefilter
