import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Timer extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      time : props.start
    }
  }
  
  // Lifecycle
  componentDidMount() {
    this.addInterval = setInterval( () => {
      this.increase()
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.addInterval)
  }

  increase() {
    if (this.state.time == "20") {
      alert('sudah sampai 20')
    }
    // parameter 1 = state sebelumnya
    // parameter 2 = properti kalo dibutuhkan
    this.setState( (state, props) => ({
      time : parseInt(state.time) + 1
    }))
  }

  render() {
    return <div>Timer : {this.state.time}</div>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Timer start="0"/>
        </header>
      </div>
    );  
  }
}

export default App;
