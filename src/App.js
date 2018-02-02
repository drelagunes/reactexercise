import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MY React</h1>
        </header>
        <h2> Below are my 3 interesting things about me </h2>
        
        <h3>
          <div>
            <ol>
              <li>I'm A DJ</li>
              <li>I travel to Disney parks around the work to perform</li>
              <li>I consume 6,000-9,000 calories a day</li>
            </ol>
          </div>
        </h3>
      </div>
    );
  }
}

export default App;
