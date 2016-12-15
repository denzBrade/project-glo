/**
* @Author: Denzil Brade <dbrade>
* @Date:   2016-12-12T16:59:10+00:00
* @Last modified by:   dbrade
* @Last modified time: 2016-12-14T19:22:23+00:00
*/

// import react deps
import React, { Component } from 'react';

// import assets
import logo from '../assets/logo.svg';

// import styles
import '../styles/App.css';
import '../styles/Welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div className="welcomeView">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Welcome</h2>
        </div>
        <p className="app-intro">
          This page will render the Welcome view
        </p>

        <div className="view-wrapper">
          <div className="welcome">
            <h1 className="welcome-message">Welcome Enter your Gaming ID Here!</h1>
            <input className="welcome-handle" type="text" name=""/><br />
            <button className="btn welcome-button" type="submit" value="Save ID handle">Go!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
