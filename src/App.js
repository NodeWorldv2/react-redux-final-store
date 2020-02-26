import React, {Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom'

import About from './components/about'
import Contact  from './components/contact'
import Profile2 from './components/profile'
import Navbar from './components/Navbar'
import Home from './components/home'
import Login from './components/Login'
import Register from './components/register'




class App extends Component {
  render(){

    return (

    
       <BrowserRouter>
        <div className="container">
            <h5>clean app</h5>
            <hr/>
              <Navbar/>
            <hr/>
           
            <Route exact path="/profile" component = {Profile2}/>
            <Route exact path="/about" component = {About}/>
            <Route exact path="/contact" component = {Contact}/>
            <Route exact path="/login" component = {Login}/>
            <Route exact path="/register" component = {Register}/>
            <Route exact path="/" component = {Home}/>


          </div>
       </BrowserRouter>

     

  );

}
   
}

export default App;
