import React, { Component } from 'react';
import './App.css';
var Markdown = require('./Markdown.js');

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>React Markdown Preview</h1>
        </div>
        <Markdown />
      </div>
    );
  }
}

export default App;
