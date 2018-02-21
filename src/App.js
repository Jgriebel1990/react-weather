import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>WEATHER!!!</h1>
        <p>Enter your latitude and Longitude to find the WEATHER</p>
        <form>
          <label>
            Latitude:
            <input type="text"/>
          </label>
          <label>
            Longitude:
            <input type="text"/>
          </label>
          <button type="submit">WEATHER!!!</button>
        </form>
      </div>
    );
  }
}

export default App;
