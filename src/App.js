import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Box} from "./components/Box";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Box vertical justify="around" align="center" height={100} pad="5px 50px"><div>Hello</div><div>World</div></Box>
      </div>
    );
  }
}

export default App;
