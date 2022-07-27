import React from 'react';
import ReactDOM from 'react-dom';
import Menubar from './Menubar';
import {BrowserRouter as Router,
    Switch,
    Route,HashRouter
    } from "react-router-dom";

import Home from './pages/Home';
import Avendre from './pages/Avendre';
import Product from './pages/product';
import SignUp from './pages/SignUp';
import Footer from './Footer';
import Singlepage from './pages/Singlepage';
import ViewPage from './pages/viewPage';


//import Example from './Example';


//import {HeroSection} from './HeroSection';
    
//https://www.youtube.com/watch?v=_ZvGwh_xV4M

//https://www.youtube.com/watch?v=a_7Z7C_JCyo
//Corresponding Tutorial Topics
//useState
//Birthday Reminder
//useEffect and Conditional Rendering
//Tours
//Reviews
//Questions
//Menu
//Tabs
//Slider
//Forms
//Lorem Ipsum Generator
//Color Shades Generator
//Grocery Bud
//useRef
///Navbar
////useContext
//Modal And Sidebar
//Stripe Submenus
//useReducer and useContext
//Cart
//React Router and useCallback
//Cocktails
////Advanced Projects (Course Exclusive)
//Course Link

//Markdown Preview
//Random Person
//Pagination
//Stock Photos
////Dark Mode
//Movie DB
//Hacker News
//Quiz
function Root() {
    //let {slug} = useParams();
   
    return (
          <div className="App page-container">
              <div className="content-wrap">
              <Router>
                <Menubar/>
                  <Switch>
                      <Route exact path='/OccazAuto/public/'  component={Home} />
                      <Route exact path='/OccazAuto/public/A-vendre/'  component={Avendre} />
                       <Route exact path='/OccazAuto/public/vehicule-usager/'   component={Product} />
                       {/* <Route exact path='/OccazAuto/public/:carrosserie'  component={Product} /> */}
                      {/*<Route exact path='/OccazAuto/public/signUp'  component={SignUp} />
                      <Route exact path='/OccazAuto/public/financement'  component={financement} />*/}
                       {/* <Route exact path='/OccazAuto/public/vehicule-usager/:marque-:modele-:id' component={Singlepage}  /> */}
                      <Route exact  path='/OccazAuto/public/:id'   component={Singlepage}/>    
                  </Switch>
             </Router>
           
             </div>
             {/* /*  voir le footer dans lequery version mobile*/ }
            <Footer/>
            {/* <PiedPage/> */}
        </div>
    );
}

export default Root;

if (document.getElementById('root')) {
    ReactDOM.render(<Router><Root/></Router>, document.getElementById('root'));
}
