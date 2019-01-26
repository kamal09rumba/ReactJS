import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import countries from "./countries"
import AutoCompleteText from "./AutoCompleteText"


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <br/>
        <label>Search Countries</label>
        <div className="App-Component">
          <AutoCompleteText items={countries}/>
        </div>
      </div>
    );
  }
}

export default App;
