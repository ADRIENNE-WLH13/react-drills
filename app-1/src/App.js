import React, { Component } from "react";
import "./App.css";

class App extends Component {


  constructor(){
    super();
    this.state = {
      message: ""
    };
  }

  //this is the function or 'event' your trying to do
  //then value for whatever the value of the change is
handleChange(value){
  //then this.setState is basically 'resetting' whatever th value WAS
  this.setState({
    message: value
  });
}


  render() {

  
    return (
      <div className="App">
      <input onChange={e => this.handleChange(e.target.value)} type="text" />

    {/* The 'input' is referring to whatever is being put in
    The 'type' is whatever type of data: text, picture, audio, etc.
    The 'onChange' is whatever we want to have happen once they di that 'action'
    The 'e' - is the 'event' or 'action' that is going to happen
    The 'target' is referring to the input (or whatever is getting put in)
    The 'value' is referring to whatever the value of that is  */}
      <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
