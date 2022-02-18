import React, { Component } from 'react';
import Detailproduct from '../Detailproduct';
import '../SinglePage.css';
export default class Singlepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    auto:[],
    laoding:true,
    }
  }
   componentDidMount(){
       const auto_id = this.props.match.params.id;
//  console.log(auto_id)
  axios.get(`http://localhost:8000/api/product/${auto_id}`).then(response =>{
    this.setState({
      auto: response.data.auto,
      laoding:false,
    })
    console.log(response.data)
 })

  }
  render() {
    var contenHTML="";
    const { auto , laoding} = this.state;
 if(laoding){
  contenHTML = <h4>Laoding ...</h4>
 }else{
  contenHTML = <div><h6>{auto.marque}</h6>
   <p>{auto.modele}</p>
   <p>{auto.prix}</p>
   <p>{auto.km}</p>
  </div>
  // contenHTML=  auto.map((carInfo,i)=>{
  //   alert(window.location.pathname);
  // var type="/OccazAuto/public";
  //   return (
  //       <div>
  //     <p>{carInfo.id}</p>
  //       </div>
  //     );
  //  })

 }

  // alert(laoding);
      return (<div className="home-container">
      <div className='singlePage-content'>
                {
                  contenHTML
                }
      </div>
  </div>
);
  }
}
