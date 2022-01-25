import React from 'react';
import ReactDOM from 'react-dom';
import Name from './Name';
import Container from 'react-bootstrap/Container';
//import  { Boutton } from './Boutton';
import axios from 'axios'
//import HeroSection from './HeroSection';

function Example() {
    return (
        <div className="container">
        
                     <Name name="yapo"></Name>
                     <Name name="jean nguio"></Name>
                     <div class="btn-group">
  <a href="#" class="btn btn-primary active" aria-current="page">Active link</a>
  <a href="#" class="btn btn-primary">Link</a>
  <a href="#" class="btn btn-primary">Link</a>
</div>

                     
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
