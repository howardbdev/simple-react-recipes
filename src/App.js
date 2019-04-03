import React, { Component } from 'react';
import RecipeContainerComponent from './RecipeContainerComponent'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RecipeContainerComponent/>
      </div>
    );
  }
}

export default App;
