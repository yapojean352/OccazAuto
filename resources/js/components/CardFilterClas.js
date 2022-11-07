import axios from 'axios';
import React, { Component } from 'react';
// const api=axios.create({
//     baseURL:`http://localhost:8000/api/list/all`
// })
export class CardFilterClas extends Component {
    constructor(){
        super();
        this.state={
          auto:[]
        };
        axios.get('https://api.github.com/users/hadley/repos').then(res=>{
          console.log(res.data)
          this.setState({
            auto:res.data
          })
        })

    }
  render() {
    return (<div><h4>Example display API  </h4>
    {this.state.auto.map((ifn)=>{
 return(<span>/======{ifn.name}</span>)
    })}
    </div>
    )
  }
}

export default CardFilterClas