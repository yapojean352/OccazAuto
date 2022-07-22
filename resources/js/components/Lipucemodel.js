import React from 'react';
import CardItems from './CardItems';
import "./Cards.css";
import Catalogue from './Catalogue';
import { Link , useHistory } from "react-router-dom";
import CardswithData from './CardswithData';
/**
 * recoit l id de la marque en url pour afficher tous ces modeles le concernant
 * recevoir le props id du parent Lipucefilter
 */
 
class Lipucemodel extends React.Component {
 
    constructor(props) {
      super(props);
      this.state = {
        subcategory:[],
        laoding:true,
        modele:''
        };
    }

    componentDidMount(){
     
      axios.get(`http://localhost:8000/api/subcategory/`).then(response =>{
        this.setState({
          subcategory: response.data.subcategory,
          laoding:false,
          modele:'',
        })
        console.log(response.data);
      })
    }
   
    render() {
     // var h =useHistory();
      var contenHTML="test";

      const {subcategory,laoding} = this.state;
   if(laoding){
    contenHTML = <h4>Laoding ...</h4>
   }else{
   this.state.subcategory.map((mod,i)=>{
     console.log(this.state.subcategory);
    // console.log(h);
    contenHTML= mod[this.props.mar].map((v ,s)=>{
     // if(v.modele !=""){
     // this.state.modele=v.modele
    //  console.log(this.props.fd)
  
      return (
          <div>
            <button  value={v.modele} onClick={(e)= this.props.fr(e.target.value)}>{v.modele}</button>
            {/* <li><Link to={`/OccazAuto/public/vehicule-usager/`+this.props.mar+'-'+v.modele}>{v.modele}</Link>
            <div><input name={v.modele} type="checkbox" class="tv-nested" value="oui"/></div>
          </li> */}
          </div>
        );
    //  }
      })
      })
    // contenHTML= this.state.name;
//console.log(this.state.category)
   }
    //    const [click,setClick]= useState(true);
    
    //     const handleClick = ()=>setClick(!click);
  
        return (<div> 
            {contenHTML}
        </div>);
}
  }
  

export default Lipucemodel


