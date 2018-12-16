import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <img src={require("./head.jpeg")} width={300} height={300} />
      <p>
      Hi there! I'm Jonathan
      </p>
      {/* <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a> */}
      </div>
    );
  }
}

export default App;
