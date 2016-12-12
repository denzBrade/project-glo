/**
* @Author: Denzil Brade <dbrade>
* @Date:   2016-12-06T16:27:27+00:00
* @Last modified by:   dbrade
* @Last modified time: 2016-12-12T17:33:28+00:00
*/

// import react deps
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// import components
import App from './components/App';
import Welcome from './components/Welcome';
import Chat from './components/Chat';


// import styles
import './styles/index.css';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome} />
      <Route path="chat" component={Chat} />
    </Route>
  </Router>
)

render(router, document.getElementById('root'));
