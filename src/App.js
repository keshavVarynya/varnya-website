import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nevbar from './components/Nevbar';
import Homepage from './components/Homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
      
       <Homepage/>
       <Nevbar />
      </div>
    );
  }
}

export default App;
