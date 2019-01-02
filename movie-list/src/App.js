import React, { Component } from 'react';
import './App.css';

import MovieComponent from './components/MovieComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieComponent />
      </div>
    );
  }
}

export default App;
