import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Salam(props) {
  return <h1> Halo {props.name} - Usia {props.age}</h1>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Salam name="Tilis Tiadi" age="25" />
        </header>
      </div>
    );  
  }
}

export default App;
