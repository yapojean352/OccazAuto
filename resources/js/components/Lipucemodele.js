// import React from 'react';
// import "./Cards.css";
// import { Link , useHistory } from "react-router-dom";
// import { countBy } from 'lodash';
// /**
//  * recoit l id de la marque en url pour afficher tous ces modeles le concernant
//  * recevoir le props id du parent Lipucefilter
//  */
 
// class Lipucemodele extends React.Component {
 
//     constructor(props) {
//       super(props);
//       this.state = {
//         subcategory:[],
//         laoding:true,
//         modele:'',
//         plus:0
//         };
//     }
    
//     componentDidMount(){
    
//       let CancelToken;
//       if(typeof CancelToken != typeof undefined){
//               CancelToken.cancel("optimze")
//             }
         
//         CancelToken = axios.CancelToken.source()      
//       axios.get(`http://localhost:8000/api/subcategory/`,{CancelToken:CancelToken.token}).then(response =>{
//         this.setState({
//           subcategory: response.data.subcategory,
//           laoding:false,
//           modele:'',
          
//         })
//         console.log(response.data);
//       })
//     }
   
//     render() {
//       var contenHTML="test";
//       const {subcategory,laoding} = this.state;
    
//    if(laoding){
//     contenHTML = <h4>Laoding ...</h4>
//    }else{
//    this.state.subcategory.map((mod,i)=>{
 
//     contenHTML= mod[this.props.mar].map((v ,s)=>{
//       // this.setState({ plus: this.state.plus + 1 }
//      // console.log(v)
//     console.log(this.props.frd(v.modele,v.marque)) 
//       return (
//           <div >
//             <li  className='subCat'> <button value = {v.modele} onClick={(e)=>this.props.fr(e.target.value)}>{v.modele}  </button>({this.props.sd[0][v.modele].length})</li>
            
//             {/* <button  value={v.modele} onClick={(e)=>this.props.fr(e.target.value)}>{v.modele}</button> */}
//             <li key={s}><Link to={`/OccazAuto/public/vehicule-usager/`+this.props.mar+'-'+v.modele}>{v.modele}  </Link>
//             {/* <div><input name={v.modele} type="checkbox" class="tv-nested" value="oui"/></div> */}
//              </li>
//           </div>
//         );
//       })
//       })
//    }
//         return (<div> 
//             {contenHTML}
//         </div>);
// }
//   }
// export default Lipucemodele


