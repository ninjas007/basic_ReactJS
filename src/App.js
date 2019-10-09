import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Salam(props) {
  return <h1> Halo {props.name} - Usia {props.age}</h1>
}

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
    <a href="#" onClick={this.handleClick}>
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
          {/* <Salam name="Tilis Tiadi" age="25" /> */}
          {/* <Timer start="0"/> */}
          <ToggleClick />
        </header>
      </div>
    );  
  }
}

export default App;
