import React, { Component } from 'react';
import GetProducts from './GetProducts.js';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>I'm A Fancy Store</h1>
        <GetProducts />
      </div>
    );
  }
}

export default App;
