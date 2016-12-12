/**
* @Author: Denzil Brade <dbrade>
* @Date:   2016-12-06T16:27:27+00:00
* @Last modified by:   dbrade
* @Last modified time: 2016-12-12T16:24:09+00:00
*/

// import react deps
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// import components
import App from './components/App';

// import styles
import './styles/index.css';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
), document.getElementById('root'));
