import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
    <header>
      <h1>Logo</h1>
      <p>Tag Line Text</p>
      <h2>Information about what the game is about will go in this area</h2>
      <Link to='/gamepage'><button>Start Guessing!</button></Link>
      <button>Instructions</button>
    </header>
    )
  }
}

export default App; 
