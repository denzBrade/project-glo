/**
* @Author: Denzil Brade <dbrade>
* @Date:   2016-12-12T16:59:10+00:00
* @Last modified by:   dbrade
* @Last modified time: 2016-12-12T17:43:08+00:00
*/

// import react deps
import React, { Component } from 'react';

// import assets
import logo from '../assets/logo.svg';

// import styles
import '../styles/App.css';

class Welcome extends Component {
  render() {
    return (
      <div className="chatView">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Welcome</h2>
        </div>
        <p className="app-intro">
          This page will render the Welcome view
        </p>
      </div>
    );
  }
}

export default Welcome;
