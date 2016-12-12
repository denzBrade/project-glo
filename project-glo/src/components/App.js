/**
* @Author: Denzil Brade <dbrade>
* @Date:   2016-12-06T16:27:27+00:00
* @Last modified by:   dbrade
* @Last modified time: 2016-12-12T17:45:30+00:00
*/

// import react deps
import React, { Component } from 'react';

// import styles
import '../styles/App.css';

class App extends Component {
  render() {
    return (
        <div>
          {this.props.children}
        </div>
    );
  }
}

export default App;
