import React, { Component } from 'react';
import './App.css';
var Markdown = require('./Markdown.js');

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>React Markdown Preview</h1>
          <p>Input github-like markdown on the left and you'll see the results on the right.</p>
          <p>Try things like</p>
          <ul>
            <li># header to see H1 tags</li>
            <li>Text attributes *italic*, **bold**, `monospace`, ~~strikethrough~~ .</li>
            <li>Paragraphs are separated by a blank line.</li>
          </ul>
        </div>
        <div className="markdown-container">
          <Markdown />
        </div>
      </div>
    );
  }
}

export default App;
