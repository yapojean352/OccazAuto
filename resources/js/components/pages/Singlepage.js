import React, { Component } from 'react';
import SingleProduct from '../SingleProduct';
import '../SinglePage.css';
/**
 * componenet child SingleProduct
 */
export default class Singlepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    auto:[],
    images:[],
    laoding:true,
    }
  }
   componentDidMount(){
    const id = this.props.match.params.id;
    axios.get(`http://localhost:8000/api/vehicule-usager/${id}`).then(response =>{
    this.setState({
      auto: response.data.auto,
      images: response.data.images,
      laoding:false,
    })
   console.log(response.data.auto)
 })
  }
  render() {
    var contenHTML="";
    const { auto  ,images, laoding} = this.state;
    console.log(images)
 if(laoding){
  contenHTML = <h4>Laoding ...</h4>
 }else{
  contenHTML = <div><h4>details products</h4>
   <SingleProduct data={auto} dataImg={images} />
  </div>
 }
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
