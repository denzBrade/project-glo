/**
* @Author: Denzil Brade <dbrade>
* @Date:   2016-12-12T16:31:27+00:00
* @Last modified by:   dbrade
* @Last modified time: 2016-12-12T17:43:20+00:00
*/

// import react deps
import React, { Component } from 'react';

// import assets
import logo from '../assets/logo.svg';

// import styles
import '../styles/App.css';

class Chat extends Component {
  render() {
    return (
      <div className="chatView">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Chat</h2>
        </div>
        <p className="app-intro">
          This page will render the Chat view
        </p>
      </div>
    );
  }
}

export default Chat;
