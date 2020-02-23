import React, {Component} from 'react';
import './App.css';

import {createStore} from 'redux'

class App extends Component {
  render(){

    const reducer = (state={},action) =>{
      if(action.type==="A")
      {
        console.log("a is called");
        
        return {
          ...state,
          A: "Thi is A state called"
        }

      }
      else if(action.type==="C")
      {
        return {
          ...state,
          B: "This is state B"
        }
      }
      else
      {

      return state;
      }

    }
    //already created a store 
    const central_store = createStore(reducer)

    //we have to use the subscriber to different component to access the central storage

    central_store.subscribe(()=>{
      console.log(central_store.getState())
    })


    central_store.dispatch({type:"A"})
    central_store.dispatch({type:"B"})
    central_store.dispatch({type:"C"})
    central_store.dispatch({type:"D"})




    
    
    return (
    <div className="App">
      <h5>clean app</h5>
      <hr/>
    </div>
  );

}
  
}

export default App;
