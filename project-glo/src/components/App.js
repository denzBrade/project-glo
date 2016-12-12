/**
* @Author: Denzil Brade <dbrade>
* @Date:   2016-12-06T16:27:27+00:00
* @Last modified by:   dbrade
* @Last modified time: 2016-12-12T15:42:28+00:00
*/

// import react deps
import React, { Component } from 'react';

// import assets
import logo from '../assets/logo.svg';

// import styles
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
