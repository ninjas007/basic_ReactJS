import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class ToggleClick extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleStatus : true
    }
    // untuk menggunakan this didalam event harus dibuat ini
    this.handleClick = this.handleClick.bind(this)
  }

  // event click
  handleClick() {
    this.setState(state => ({
      toggleStatus: !state.toggleStatus
    }));
  }

  render() {
    return(
    <a href="#" onClick={this.handleClick()}>
      {this.state.toggleStatus ? 'MENYALA' : 'MATI'}
    </a>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ToggleClick />
        </header>
      </div>
    );  
  }
}

export default App;
