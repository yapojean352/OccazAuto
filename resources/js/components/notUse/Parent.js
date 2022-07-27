import React, { Component } from 'react'

class Parent extends React.Component {
    constructor(props){
        super(props);
       
    }
    render() {
        return (
            <div className="parent">
                <div className="container">
              
              <div onClick={()=>this.showNav}>
                
              </div>
                <Sidenav affiche="sideNav"/>
            </div>
            </div>
        )
    }
    showNav() {
     this.affiche.sideNav.show();
    }
    }